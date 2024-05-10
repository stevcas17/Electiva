import dataSlider from '../../../molecules/popup/data/dataSlider';
import './Popup-step.scss';
import React from 'react';

export default ({ id, step, onClick }) => {
  const data = dataSlider;
  const steps = [];

  data.forEach((_, index) => {
    steps.push({
      className: 'step-inactive',
      step: index
    });
  });

  if (step >= 0) {
    steps[step].className = 'step-active';
  }

  return (
    <>
      {data[step].src && data[step].label && (
        <div className={'popup-step'} id={id}>
          {steps.map(item => (
            <div key={item.step} className={item.className} onClick={() => onClick(item.step)}></div>
          ))}
        </div>
      )}
    </>
  );
};
