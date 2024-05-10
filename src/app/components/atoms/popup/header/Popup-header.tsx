import React from 'react';
import './Popup-header.scss';
import { Image } from '../../image/Image';

export default ({ id, src }) => {
  return (
    <>
      {src && (
        <div className="popup-header" id={id}>
          <Image src={src} alt={'popup-animation'} className={null} width={'auto'} height={'auto'}></Image>
        </div>
      )}
    </>
  );
};
