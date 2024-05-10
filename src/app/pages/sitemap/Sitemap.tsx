//core
import React, { useState } from 'react';
import { History } from 'history';

// translations
import { useTranslation } from 'react-i18next';

// component
import Nav from '../../components/molecules/navbar/Nav';

// Mui Material
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

// Icons
import Icon from '@mdi/react';
import { icons } from '../../../utils/icons/constants';

//interfaces
import './Sitemap.scss';
import Footer from '../../components/molecules/footer/Footer';

import { URL_PATHS } from '../../../utils/url-routes';

import _uniqueId from 'lodash/uniqueId';

export default ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const goTo = (url, option) => {
    console.log('URL pasada: ', url);
    if (url.includes('http') || url.includes('assets')) return window.open(url, '_blank');
    history.push(url, option);
  };

  const links = [
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.portal.title'),
      content: [
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.portal.home'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.portal.register'),
          url: URL_PATHS.PORTAL_REGISTER
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.portal.forgotPassword'),
          url: URL_PATHS.PORTAL_FORGOT
        }
      ]
    },
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.business.title'),
      content: [
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.business.whatIs'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.business.howIsIt'),
          url: '/?section=howWorks'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.business.login'),
          url: URL_PATHS.PORTAL_LOGIN
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.business.register'),
          url: URL_PATHS.PORTAL_REGISTER
        }
      ]
    },
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.product.title'),
      content: [
        // {
        //   id: _uniqueId('menu-'),
        //   name: t('sitemap.link.product.codeqr'),
        //   url: '/?section=paymentsQR'
        // },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.product.paymentGateway'),
          url: '/?section=paymentsGateway'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.product.payLink'),
          url: '/?section=paymentsLink'
        }
      ]
    },
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.howMuch.title'),
      content: [
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.howMuch.naturalPerson'),
          url: '/cuanto-cuesta'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.howMuch.commerce'),
          url: '/cuanto-cuesta'
        }
      ]
    },
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.help.title'),
      content: [
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.help.frecuentQuestions'),
          url: '/ayuda'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.help.lineAttention'),
          url: '/ayuda',
          option: 'lineAttention'
        }
      ]
    },
    {
      id: 523881239,
      title: t('sitemap.link.securityTips.title'),
      content: [],
      link: '/tips-de-seguridad'
    },
    {
      id: _uniqueId('menu-'),
      title: t('sitemap.link.transparency.title'),
      content: [
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.terms'),
          url: '/assets/portal/legal/TermsAndConditions.pdf'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.regulationOfProducts'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.dataProcessingPolicy'),
          url: '/assets/portal/legal/PersonalDataConditions.pdf'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.ethicsLine'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.financialConsumerOmbudsman'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.financialSuperintendency'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.privacyNotice'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.cookiesPolicy'),
          url: '/'
        },
        {
          id: _uniqueId('menu-'),
          name: t('sitemap.link.transparency.aboutSite'),
          url: '/'
        }
      ]
    }
  ];

  return (
    <div className="sitemap" data-testid="sitemapTestRender">
      <Nav history={history} />

      <div className="sitemap__container">
        {/* Start header */}
        <div className="sitemap__header">
          <h1 className="sitemap__header-text">{t('sitemap.title')}</h1>
        </div>
        {/* End header */}

        {/* Start accordion */}
        <div className="sitemap__body">
          <div className="accordion">
            {links.map((lk, index) =>
              lk.id === 523881239 ? (
                <div key={index} className="accordion__card accordion__card-btn">
                  <div className="accordion__card-title accordion__card-title-btn" onClick={() => goTo(lk.link, '')}>
                    <Typography
                      key={index}
                      component={'span'}
                      sx={{ width: '100%', flexShrink: 0, fontFamily: 'inherit', fontWeight: 600 }}
                    >
                      {lk.title}
                    </Typography>
                    <Icon size={1} path={icons.mdiChevronRight} />
                  </div>
                </div>
              ) : (
                <Accordion
                  expanded={expanded === `panel${index}`}
                  className="accordion__card"
                  key={index}
                  style={{ boxShadow: 'none' }}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<Icon size={1} path={icons.mdiChevronRight} className="menu-item-image" />}
                    className="accordion__card-title"
                    key={index}
                    aria-controls={`panel${index}bh-content`}
                    id={`panel${index}bh-header`}
                  >
                    <Typography
                      component={'span'}
                      key={index}
                      sx={{ width: '100%', flexShrink: 0, fontFamily: 'inherit', fontWeight: 600 }}
                    >
                      {lk.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion__card-content">
                    <Typography component={'span'} sx={{ width: '100%', flexShrink: 0, fontFamily: 'inherit' }}>
                      {lk.content.map(link => (
                        <div key={link.id} className="link__container">
                          <div className="link" key={link.id} onClick={() => goTo(link.url, link.option)}>
                            {link.name}
                          </div>
                        </div>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </div>

          {/* End accordion */}

          <Footer footerDirectionVertical={false} disableSitemap={false} />
        </div>
      </div>
    </div>
  );
};
