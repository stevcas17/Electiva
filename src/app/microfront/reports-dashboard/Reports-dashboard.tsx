import React, { useRef, useEffect } from 'react';
import { History } from 'history';
import { mount } from 'reports_dashboard/bootstrap';
import './Reports-dashboard.scss';

export default ({ history }: { history: History }): JSX.Element => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, route => history.push(route));
  });

  return <div ref={ref} className="Container-microfront" />;
};
