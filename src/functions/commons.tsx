import NodeRsa from 'node-rsa';

/**
 * Function to get idRecaptcha event
 *
 * @returns {string} id recaptcha from event
 */

export const getIdReCaptchaByEvent = (): Promise<string> => {
  return new Promise((res, rej) => {
    try {
      window['grecaptcha'].ready(() => {
        window['grecaptcha']
          .execute(process.env.SITE_KEY_PORTAL, { action: 'submit' })
          .then(token => {
            res(token);
          })
          .catch(error => {
            console.log('RECAPTCHA ERROR: ', error);
            rej('error generating idRecaptcha');
          });
      });
    } catch (e) {
      console.log('RECAPTCHA ERROR: ', e);
      rej('error generating idRecaptcha');
    }
  });
};

/**
 * Encrypt a string using the backend public key in the environments variables
 *
 * @param {string} value the input string to cipher with RSA
 *
 * @returns {string} the ciphered string
 */
export const encryptMessage = (value: string): string => {
  const keyPublic = `-----BEGIN PUBLIC KEY-----\n${process.env.REACT_APP_KEYPUBLIC}\n-----END PUBLIC KEY-----`;
  const rsa = new NodeRsa(keyPublic);
  return rsa.encrypt(value, 'base64');
};

/**
 * Obtains the user agent through window.navigator api
 * @returns {string} The user's browser information
 */
export const getUserAgent = (): string => {
  return window.navigator.userAgent || '';
};
