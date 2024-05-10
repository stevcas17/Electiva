import React from 'react';
import { useTranslation } from 'react-i18next';

import TypeBox from '../typeBox/TypeBox';
import { Buttons } from '../../atoms';
import { images } from '../../../../utils/icons/constants';
import './UnderConstruction.scss';
import { Image } from '../../atoms';

const UnderConstruction = ({ history, footer = true }): JSX.Element => {
  // i18n
  const { t } = useTranslation();
  const goBack = () => {
    window.history.back();
  };
  return (
    <TypeBox className="container__underConstruction" navBack={false} footer={footer}>
      <div className="image">
        <Image
          src={images.UnderConstructionImage}
          alt={null}
          className={'container__underConstruction-image'}
          width={null}
          height={null}
        ></Image>
      </div>

      <p className="container__underConstruction-title1">{t('UnderContruction.title')}</p>
      <p className="container__underConstruction-info">{t('UnderContruction.info')}</p>

      <Buttons
        label={t('UnderContruction.buttons.back')}
        id="under.construction.bussiness_back_button"
        onClick={goBack}
        className="container__underConstruction-button"
      />
    </TypeBox>
  );
};

export default UnderConstruction;
