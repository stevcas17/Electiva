import React, { useEffect } from 'react';
import PopupFooter from '../../atoms/popup/footer/Popup-footer';
import PopupHeader from '../../atoms/popup/header/Popup-header';
// import { setTealium } from '../../../../functions/tealium';
import { images } from '../../../../utils/icons/constants';
import PopupBody from '../../atoms/popup/body/Popup-body';
import PopupStep from '../../atoms/popup/step/Popup-step';
import { Image } from '../../atoms';
import dataSlider from './data/dataSlider';
import './Popup.scss';

export default ({ showPopup, onChange, id }) => {
  let timeoutStep;
  const data = dataSlider;
  const [step, changeStep] = React.useState(0);
  const [counter, changeCounter] = React.useState(true);

  /*useEffect(() => {
    setTealium(
      'track',
      {
        tealium_event: 'modalInfo',
        event_category: 'comiezaProceso',
        event_label: `infoComenzarProceso`
      },
      'link'
    );
  }, []);*/

  useEffect(() => {
    timeoutStep = setInterval(() => {
      if (counter && step < data.length - 1) {
        changeStep(step + 1);
      } else if (counter && step == data.length - 1) {
        setTimeout(() => {
          showPopup();
        }, 6000);
      }
    }, 4000);
    return () => clearInterval(timeoutStep);
  });

  useEffect(() => {
    onChange(data[step]);
  }, [step]);

  const nextStep = () => {
    changeCounter(false);
    if (step < data.length - 1) {
      changeStep(step + 1);
    }
  };

  const prevStep = () => {
    changeCounter(false);
    if (step > 0) {
      changeStep(step - 1);
    }
  };

  const setStep = index => {
    changeCounter(false);
    changeStep(index);
  };

  return (
    <div className="container-popup" id={id}>
      <div className="container-popup__close">
        {data[step].src && data[step].label && (
          <div id="popup-close" onClick={showPopup}>
            <Image src={images.PopupClose} alt={'icon-close'} className={null} width={'auto'} height={'28px'}></Image>
          </div>
        )}
      </div>
      <PopupHeader id="popup-header" src={data[step].src}></PopupHeader>
      <PopupStep id="popup-step" step={data[step].step} onClick={setStep}></PopupStep>
      <PopupBody id="popup-body" label={data[step].label}></PopupBody>
      <PopupFooter id="popup-footer" step={data[step].step} onPrev={prevStep} onNext={nextStep}></PopupFooter>
    </div>
  );
};
