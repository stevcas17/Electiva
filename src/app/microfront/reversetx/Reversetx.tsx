import React, { useRef, useEffect } from 'react';
import { History } from 'history';
import { mount } from 'reversetx/bootstrap';
import './Reversetx.scss';

export default ({ history }: { history: History }): JSX.Element => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, route => history.push(route));
  });

  return <div className="Container-microfront" ref={ref} />;
};
