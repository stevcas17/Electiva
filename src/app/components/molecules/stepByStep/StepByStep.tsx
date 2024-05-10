import { images } from '../../../../utils/icons/constants';
import Menu from '../../atoms/stepByStep/menu/Menu';
import dataSlider from '../popup/data/dataSlider';
import { Image } from '../../atoms';
import { Header } from '../../atoms';
import Popup from '../popup/Popup';
import './StepByStep.scss';
import React from 'react';

const StepByStep = ({ id, listOptions, username, onClose }) => {
  const [step, setStep] = React.useState(dataSlider[0]);
  const scrollTo = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (scrollTo && scrollTo.current) {
      scrollTo.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [step]);

  React.useEffect(() => {
    if (listOptions && listOptions.length > 0) {
      const dataToDelete = [];
      dataSlider.forEach((option, indexList) => {
        const index = listOptions.findIndex(obj => obj.name === option.name);
        if (index < 0) {
          dataToDelete.push(indexList);
        }
      });
      dataToDelete.reverse().forEach(del => {
        dataSlider.splice(del, 1);
      });

      listOptions.forEach((option, indexList) => {
        if (option.path !== 'logout') {
          const index = dataSlider.findIndex(obj => obj.name === option.name);
          if (index >= 0) {
            dataSlider[index].step = indexList;
            dataSlider[index].offset = parseInt(option.group, 10) - 1;
          } else {
            const slide = {
              step: indexList,
              offset: parseInt(option.group, 10) - 1,
              location: option.path,
              name: option.name,
              title: null,
              label: null,
              src: null
            };
            dataSlider.splice(indexList, 0, slide);
          }
        }
      });
    }
  }, [listOptions]);

  return (
    <div className="step-by-step" id={id}>
      <div className="step-by-step__container">
        <Header menuStatus={true} showMenu={null} />
        <Menu listOptions={listOptions} username={username} location={step.location} />
        <div className="popup" style={{ paddingTop: `${step.offset * 33 + step.step * 76}px` }}>
          <div className="popup__image" ref={scrollTo}>
            <Image alt={'popup-focus'} className={null} width={'auto'} height={'auto'} src={images.PopupCircle} />
          </div>
          <div className="popup__content">
            <Popup showPopup={onClose} onChange={setStep} id={'popup-step'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
