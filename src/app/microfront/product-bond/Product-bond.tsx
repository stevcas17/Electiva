import React, { useRef, useEffect } from 'react';
import { mount } from 'product_bond/bootstrap';
import { History } from 'history';

export default ({ history }: { history: History }): JSX.Element => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, route => history.push(route));
  });

  return <div ref={ref} className="Container-microfront" />;
};
