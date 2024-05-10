import dataSlider from '../../../molecules/popup/data/dataSlider';
import { images } from '../../../../../utils/icons/constants';
import { Image } from '../../image/Image';
import './Popup-footer.scss';
import React from 'react';

export default ({ id, step, onPrev, onNext }) => {
  const data = dataSlider;
  const [overPrev, setOverPrev] = React.useState(false);
  const [overNext, setOverNext] = React.useState(false);

  return (
    <div className="popup-footer" id={id}>
      <div>
        {step > 0 && (
          <div
            onMouseOver={() => setOverPrev(true)}
            onMouseOut={() => setOverPrev(false)}
            id={'popup-prev'}
            onClick={onPrev}
          >
            <Image
              src={overPrev ? images.PopupBackHover : images.PopupBack}
              className={null}
              alt={'img-prev'}
              height={'48px'}
              width={'auto'}
            ></Image>
          </div>
        )}
      </div>
      <div>
        {step < data.length - 1 && (
          <div
            onMouseOver={() => setOverNext(true)}
            onMouseOut={() => setOverNext(false)}
            id={'popup-next'}
            onClick={onNext}
          >
            <Image
              src={overNext ? images.PopupNextHover : images.PopupNext}
              className={null}
              alt={'img-next'}
              height={'48px'}
              width={'auto'}
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
};
