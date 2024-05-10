import React from 'react';
import { images } from '../../../../utils/icons/constants';
import { Image } from '../index';
import './Tooltip.scss';

/**
 * Component of Tooltip Atom
 *
 * @param {string}    info    INFO to show in tooltip element
 * @param {string}    theme   THEME of tooltip element (dark, light)
 */
export const Tooltip = ({ info, theme, expand = null }) => {
  return (
    <div className={'container-tooltip'}>
      <div className={'container-tooltip__icon'}>
        <Image
          src={images.InformationIcon}
          alt={'tooltip-icon'}
          className={theme}
          height={'24px'}
          width={'auto'}
        ></Image>
      </div>
      <span className={'tooltip'}>{info}</span>
    </div>
  );
};
