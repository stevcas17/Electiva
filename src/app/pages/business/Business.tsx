import React from 'react';
import { History } from 'history';
import UnderConstruction from '../../components/molecules/underConstruction/UnderConstruction';
import Nav from '../../components/molecules/navbar/Nav';

export default ({ history }: { history: History }): JSX.Element => {
  return (
    <>
      <Nav history={history} />
      <UnderConstruction history={history} />;
    </>
  );
};
