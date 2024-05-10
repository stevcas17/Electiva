import axios from 'axios';
import { emitEventMF } from '../../functions/eventsMF';
import { refreshToken } from './Api-service';
import { getIdReCaptchaByEvent } from '../../functions/commons';
import { getIndexeddb, getTokensIndexDB, saveTokensIndexDB } from '../../tools/ngforage.config';
/**
 * httpClientApiServ  axios create urlbase
 *
 */
const httpClientApiServ = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.APPSYNC_HEADER_APIKEY
  }
  // baseURL: '/dev/v1'
});

const httpClientApiServPub = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.APPSYNC_HEADER_APIKEY
  }
  // baseURL: '/dev/v1'
});

const httpClientApiRefreshTokenServ = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.APPSYNC_HEADER_APIKEY
  }
  // baseURL: '/dev/v1'
});

export interface IHeader {
  'Content-Type': string;
  'x-api-key': string;
  endpointEnv?: string;
  authorization?: string;
  idToken?: string;
  sessionid?: JSON;
  clientid?: string;
}
export interface ITokens {
  /** Access token */
  accessToken: string;
  /** Refresh token */
  refreshToken: string;
  /** Id token */
  idToken: string;
  /** Date and time when access token is expired in milliseconds */
  dateExpirationAccessToken: string;
  /** Cognito's username */
  sub: string;
  /** Session duration in seconds */
  sessionExpirationIn: string;
  /** Secret encryption key */
  kpri: string;
  /** Encrypted portal menu */
  menubar: string;
  /** Password status if expired */
  pwExpired: string;
}

const shouldRefreshTokens = (tokens: ITokens) => {
  const GABELA_TIME_MINUTES = 60 * 2.45; //-> 6.30 to test 2.45 prod seconds
  const todaySeconds = new Date().getTime() / 1000;
  const validTimeTokenSeconds = parseInt(tokens.dateExpirationAccessToken) - GABELA_TIME_MINUTES;

  return todaySeconds > validTimeTokenSeconds;
};

/**
 * addHeaderEnv
 * @param {IHeader} headers
 * @returns
 */
export const addHeaderEnv = (headers: IHeader) => {
  let finalHeaders = {
    ...headers
  };
  if (process.env.REACT_APP_ENV !== 'pro') {
    finalHeaders = {
      ...finalHeaders,
      endpointEnv: process.env.REACT_APP_ENV
    };
  }
  return finalHeaders;
};

export const requestHandlerRefreshToken = request => {
  request.headers = addHeaderEnv(request.headers);
  return request;
};

export const requestHandler = async request => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  // request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';
  const id = localStorage.getItem('id');
  request.headers = addHeaderEnv(request.headers);
  const tokens = await getTokensIndexDB();
  if (tokens && shouldRefreshTokens(tokens)) {
    console.log('shouldRefresh');
    const username = await getIndexeddb('session', 'username');
    const newTokens = await refreshToken({
      refreshToken: tokens.refreshToken,
      username,
      sessionid: JSON.parse(id)
    });
    console.log('Response from refreshToken, newTokens=', newTokens);
    tokens.accessToken = newTokens.data.data.refreshToken.accessToken;
    tokens.idToken = newTokens.data.data.refreshToken.idToken;
    tokens.dateExpirationAccessToken = newTokens.data.data.refreshToken.newExpiration;
    await saveTokensIndexDB({ ...tokens });
    console.log('REFRESHED TOKENS:', tokens);
  }
  request.headers = {
    ...request.headers,
    authorization: `Bearer ${tokens.accessToken}`,
    idToken: `${tokens.idToken}`,
    sessionid: JSON.parse(id)
  };
  // console.log("BEFORE CALL INTERCEPTOR EXECUTED, request object =",request)
  return request;
};

export const requestHandlerPub = async request => {
  request.headers = addHeaderEnv(request.headers);
  request.headers = {
    ...request.headers,
    authorizationtoken: await getIdReCaptchaByEvent(),
    source: 'portal'
  };
  return request;
};

export const responseHandler = response => {
  //TODO: implement error interceptor to show victor mopping or close the session, etc.
  //if response data == null should look for error object
  //if error object is present then validate if it's 412 or 423. Other error code should emit redux event to show victor
  // if (response.status === 401) {
  //     // window.location = '/login';
  // }
  if (response.data.errors) {
    console.log('Response with errors:', response);
    const errorCode = response.data.errors[0]['errorInfo'].code;
    if ([412, 423].includes(errorCode)) {
      console.log('SEND ERROR TO COMPONENT');
      return Promise.reject(response.data.errors[0]);
    } else {
      console.log('MUST EMMIT REDUX ERROR, graph status 200');
      emitEventMF('SET_ERROR', true, response.data.errors[0]);
      return Promise.reject(response.data.errors[0]);

      //Emit redux event
    }
  }
  // console.log("AFTER CALL INTERCEPTOR EXECUTED, response object =", response)
  return response;
};

export const errorHandler = async error => {
  //TODO: implement error interceptor to show victor mopping or close the session when the service fails completely
  //all graphql error return status code 200
  // const errorResult = await error.toJSON();
  console.log('ON ERROR HANDLER FROM INTERCEPTOR, error=', error);

  const genericError = {
    data: {
      errors: [
        {
          errorInfo: {
            code: 500,
            message: 'Error 500'
          }
        }
      ]
    }
  };
  // console.log("ON ERROR HANDLER FROM INTERCEPTOR, error=",errorResult)
  console.log('MUST EMMIT REDUX ERROR, graph status is not 200');
  emitEventMF('SET_ERROR', true, genericError.data.errors[0]);
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
httpClientApiServ.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error)
);

httpClientApiServ.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
);

httpClientApiServPub.interceptors.request.use(
  request => requestHandlerPub(request),
  error => errorHandler(error)
);
httpClientApiServPub.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
);

httpClientApiRefreshTokenServ.interceptors.request.use(
  request => requestHandlerRefreshToken(request),
  error => errorHandler(error)
);

httpClientApiRefreshTokenServ.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
);

export { httpClientApiServ, httpClientApiServPub, httpClientApiRefreshTokenServ };
