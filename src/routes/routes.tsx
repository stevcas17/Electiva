import React, { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useIdleTimer } from 'react-idle-timer';
import { URL_PATHS } from '../utils/url-routes';
import { images } from '../utils/icons/constants';
import CryptoJS from 'crypto-js';
import { Image } from '../../src/app/components/atoms';
import { QrToastAlert } from '../app/components/molecules/qrToastAlert/QrToastAlert';
import { useTranslation } from 'react-i18next';

import TealiumComponent from '../utils/tealium-component/TealiumComponent';
import GlobalStoreContext from '../context/globalStoreContext';
import SessionSocketServices from '../app/services/Session-socket';
import { AlertInterface } from '../app/components/molecules/alerts/interface';
// Pages
import Launch from '../app/pages/launch/Launch';
import Validator from '../app/pages/validator/Validator';
import Business from '../app/pages/business/Business';
import Cost from '../app/pages/cost/Cost';
import Help from '../app/pages/help/Help';
import Products from '../app/pages/products/Products';
import Security from '../app/pages/security/Security';
import Sitemap from '../app/pages/sitemap/Sitemap';
import Home from '../app/pages/home/Home';
import { UpdateBrowser } from '../app/pages/updateBrowser/UpdateBrowser';

//Functions
import Alerts from '../app/components/molecules/alerts/Alert';
import { getIndexeddb } from '../tools/ngforage.config';
import './styles.scss';
// scroll
import ScrollToTop from '../functions/scrollToTop';

// Inactivity
import ErrorBox from '../app/components/molecules/errorBox/ErrorBox';
import { emitEventMF } from '../functions/eventsMF';
import executeLogout from '../functions/logout';
import GetDataUser from '../functions/Get-data-user';
import { ReverseToastAlert } from '../app/components/molecules/reverseToastAlert/ReverseToastAlert';

// Microfront
const Portal = lazy(() => import('../app/microfront/portal/Portal'));
const Qr = lazy(() => import('../app/microfront/qr/Qr'));
const Reversetx = lazy(() => import('../app/microfront/reversetx/Reversetx'));
const LandingPage = lazy(() => import('../app/microfront/landing-page/Landing-page'));
//const Catalogue = lazy(() => import('../app/microfront/catalogue/Catalogue'));
const Link = lazy(() => import('../app/microfront/link/Link'));
const ProductBondGateway = lazy(() => import('../app/microfront/product-bond-gateway/Product-bond-gateway'));
//const ProductBond = lazy(() => import('../app/microfront/product-bond/Product-bond'));
const ReportsDashboard = lazy(() => import('../app/microfront/reports-dashboard/Reports-dashboard'));
const AccountSelection = lazy(() => import('../app/microfront/account-selection/Account-selection'));

export const AppRouter = ({ history }) => {
  const { t } = useTranslation();
  const TIME_OF_INACTIVITY = 1000 * 60 * 4;
  const TIME_OF_SESSION = 1000 * 60 * 5;
  const hist = useHistory();
  const { setTealium } = TealiumComponent();
  const EventStore = useContext(GlobalStoreContext);
  const socketServices = new SessionSocketServices();
  const [isInactive, setIsInactive] = useState(false);
  const [qrVinculationValueProgress, setQrVinculationValueProgress] = useState(null);
  const [reverseValueProgress, setReverseValueProgress] = useState(null);

  const startSocketVinculationRef = useRef(false);
  const startSocketReverseRef = useRef(false);
  const calledCommerceId = useRef(false);
  const commerceIdRef = useRef(null);

  const [alertConfig, setAlertConfig] = useState<AlertInterface>({
    showModal: false,
    message: '',
    description: '',
    type: 'ALERT',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onButtonClickFunction: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCloseFunction: () => {},
    showButton: true,
    showCloseButton: true,
    buttonContinueText: '',
    className: ''
  });

  const handleInactivity = async () => {
    const resp = await getIndexeddb('session', 'session');
    if (resp) {
      if (
        hist.location.pathname !== URL_PATHS.PRODUCTS &&
        hist.location.pathname !== URL_PATHS.COST &&
        hist.location.pathname !== URL_PATHS.HELP &&
        hist.location.pathname !== URL_PATHS.SECURITY &&
        hist.location.pathname.search('landing-page') !== 1 &&
        hist.location.pathname.search('catalogue') !== 1 &&
        hist.location.pathname.length !== 1
      ) {
        await handleExecution();
      }
    }

    if (location.pathname == URL_PATHS.PORTAL_LOGIN_OTP) {
      await handleExecution();
    }
  };

  const handleExecution = async () => {
    const resp = await getIndexeddb('session', 'session');
    const session = resp ? CryptoJS.AES.decrypt(resp, process.env.KEY).toString(CryptoJS.enc.Utf8) : null;
    if (session === 'active' || location.pathname == URL_PATHS.PORTAL_LOGIN_OTP) {
      setAlertConfig({
        showModal: true,
        message: 'Tu sesión cerrará pronto por inactividad.',
        description: '',
        onButtonClickFunction: () => setAlertConfig({ ...alertConfig, showModal: false }),
        onCloseFunction: () => setAlertConfig({ ...alertConfig, showModal: false }),
        showButton: true,
        showCloseButton: true,
        buttonContinueText: 'Lo entiendo',
        className: ''
      });
    }
  };

  const closeInactivityModal = async () => {
    const resp = await getIndexeddb('session', 'session');
    const session = resp ? CryptoJS.AES.decrypt(resp, process.env.KEY).toString(CryptoJS.enc.Utf8) : null;
    if (!session && session != 'active') {
      setAlertConfig({
        ...alertConfig,
        showModal: false
      });
    }
  };

  const handleLogout = async () => {
    const resp = await getIndexeddb('session', 'session');
    if (resp || location.pathname == URL_PATHS.PORTAL_LOGIN_OTP) {
      if (
        (hist.location.pathname !== URL_PATHS.PRODUCTS &&
          hist.location.pathname !== URL_PATHS.COST &&
          hist.location.pathname !== URL_PATHS.HELP &&
          hist.location.pathname !== URL_PATHS.SECURITY &&
          hist.location.pathname.search('landing-page') !== 1 &&
          hist.location.pathname.search('catalogue') !== 1 &&
          hist.location.pathname.length !== 1) ||
        location.pathname == URL_PATHS.PORTAL_LOGIN_OTP
      ) {
        setAlertConfig({
          ...alertConfig,
          showModal: false
        });
        emitEventMF('CHANGE_MENU', false);
        emitEventMF('CHANGE_HEADER', false);
        setIsInactive(true);
        executeLogout(false);
      }
    }
  };

  useIdleTimer({
    timeout: TIME_OF_INACTIVITY,
    onIdle: handleInactivity,
    onAction: handleLogout,
    debounce: TIME_OF_SESSION
  });

  //   Reacting to the action of tealium
  useEffect(() => {
    const store = EventStore['Shell'];

    if (store?.dataTealium?.status) {
      setTealium(store?.dataTealium);
    }

    if (!store?.dataSession?.status) {
      //setQrVinculationValueProgress(false);
      //setReverseValueProgress(false);
      closeInactivityModal();
    }

    if (store?.dataSession?.status) {
      if (!calledCommerceId.current) {
        calledCommerceId.current = true;
        (async () => {
          if (!commerceIdRef.current) {
            const dataIdbCommerce = await GetDataUser();
            if (dataIdbCommerce.commerceId) {
              commerceIdRef.current = dataIdbCommerce.commerceId;
              socketServices.requestGetStateVinculationQr(dataIdbCommerce.commerceId);
              socketServices.requestGetStateReversingTx(dataIdbCommerce.commerceId);
            } else {
              calledCommerceId.current = false;
            }
          }
        })();
      }
    }

    //Start sockets first time on start event mf
    if (store?.dataStartSocketQr?.status) {
      if (!startSocketVinculationRef.current) {
        socketServices.qrVinculationProgress(_ => {
          if (_.socketInit) startSocketVinculationRef.current = true;
        });
      }
    }
    if (store?.dataStartSocketReversoTx?.status) {
      if (!startSocketReverseRef.current) {
        socketServices.txReverseProgress(_ => {
          if (_.socketInit) startSocketReverseRef.current = true;
        });
      }
    }

    if (store?.dataVinculation?.status) {
      setQrVinculationValueProgress(store?.dataVinculation?.status);
    }

    if (store?.dataTxReverso?.status) {
      setReverseValueProgress(store?.dataTxReverso?.status);
    }
  }, [EventStore]);

  return (
    <Suspense
      fallback={
        <div className="loadingMiniStyle">
          <Image
            src={images.Loading}
            className="loadingMiniStyle__ldsDualRing"
            alt={'loading'}
            height="auto"
            width="auto"
          ></Image>
        </div>
      }
    >
      {qrVinculationValueProgress ? <QrToastAlert data={qrVinculationValueProgress} /> : <></>}

      {reverseValueProgress ? <ReverseToastAlert data={reverseValueProgress} /> : <></>}

      <Alerts
        message={alertConfig.message}
        showModal={alertConfig.showModal}
        onButtonClickFunction={alertConfig.onButtonClickFunction}
        onCloseFunction={alertConfig.onCloseFunction}
        showButton={alertConfig.showButton}
        showCloseButton={alertConfig.showCloseButton}
        buttonContinueText={alertConfig.buttonContinueText}
        className={alertConfig.className}
        description={alertConfig.description}
        type={alertConfig.type}
        showSecondaryButton={alertConfig.showSecondaryButton}
        buttonSecondaryText={alertConfig.buttonSecondaryText}
        onButtonSecondaryClickFunction={alertConfig.onButtonSecondaryClickFunction}
      />
      {isInactive ? (
        <ErrorBox
          title={t('interceptor.missing.title')}
          message={t('interceptor.missing.message')}
          image={images.Missing}
          buttonName={t('interceptor.general.botton')}
          footer={true}
        ></ErrorBox>
      ) : (
        <ScrollToTop>
          <Switch>
            <Route path={URL_PATHS.PORTAL}>
              <Portal history={history}></Portal>
            </Route>
            <Route path={URL_PATHS.QR}>
              <Qr history={history}></Qr>
            </Route>
            <Route path={URL_PATHS.REVERSETX}>
              <Reversetx history={history}></Reversetx>
            </Route>
            <Route path={URL_PATHS.PRODUCT_BOND_GATEWAY}>
              <ProductBondGateway history={history}></ProductBondGateway>
            </Route>
            {/* <Route path={URL_PATHS.PRODUCT_BOND}>
              <ProductBond history={history}></ProductBond>
            </Route> */}
            <Route path={URL_PATHS.LANDING_PAGE}>
              <LandingPage history={history}></LandingPage>
            </Route>
            {/* <Route path={URL_PATHS.CATALOGUE}>
              <Catalogue history={history}></Catalogue>
            </Route> */}
            <Route path={URL_PATHS.LINK}>
              <Link history={history}></Link>
            </Route>
            <Route path={URL_PATHS.REPORTS_DASHBOARD}>
              <ReportsDashboard history={history}></ReportsDashboard>
            </Route>
            <Route path={URL_PATHS.ACCOUNT_SELECTION}>
              <AccountSelection history={history}></AccountSelection>
            </Route>
            <Route path={URL_PATHS.BUSSINNES}>
              <Business history={history}></Business>
            </Route>
            <Route path={URL_PATHS.PRODUCTS}>
              <Products history={history}></Products>
            </Route>
            <Route path={URL_PATHS.COST}>
              <Cost history={history}></Cost>
            </Route>

            <Route path={URL_PATHS.SECURITY}>
              <Security history={history}></Security>
            </Route>

            <Route path={URL_PATHS.HELP}>
              <Help history={history}></Help>
            </Route>

            <Route path={URL_PATHS.SITEMAP}>
              <Sitemap history={history}></Sitemap>
            </Route>

            <Route path={URL_PATHS.LAUNCH}>
              <Launch history={history}></Launch>
            </Route>

            <Route path={URL_PATHS.VALIDATOR}>
              <Validator history={history}></Validator>
            </Route>

            <Route path={URL_PATHS.UPDATE_BROWSER}>
              <UpdateBrowser history={history}></UpdateBrowser>
            </Route>

            <Route path={URL_PATHS.HOME}>
              <Home history={history}></Home>
            </Route>
          </Switch>
        </ScrollToTop>
      )}
    </Suspense>
  );
};
