import React from 'react';
//import { shallow, render, mount } from 'enzyme';
import { fireEvent, render, screen } from '@testing-library/react';
import Options from './Options';
import { menuMock } from '../../../../../__mocks__/menuMock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

const globalAny: any = global;

globalAny.executeLogout = () => Promise.resolve(true);
const executeLogout = jest.fn(() => Promise.resolve(true));
describe('Options test', () => {
  const label = 'logout';

  it('Options full settings', async () => {
    const { container } = render(<Options listOptions={menuMock} location={'/dale/inicio'}></Options>);

    const buton = container.querySelector('.logout');
    fireEvent.click(buton);

    expect(container.getElementsByClassName(label).length).toBe(1);
    const butonContinue = container.querySelector('.btnContinue');
    fireEvent.click(butonContinue);

    executeLogout().then(res => console.log('test', res));
    await Promise.resolve(true);
    await tick();
  });

  it('should render the last login information when is sent', async () => {
    const { container } = render(
      <Options
        listOptions={menuMock}
        location={'/dale/inicio'}
        lastLogin={1666706924}
        userSessionIp={'127.0.0.1'}
      ></Options>
    );
    const lastLoginDate = screen.queryAllByText('Fecha último ingreso:');
    const lastIpLogin = screen.queryAllByText('IP: 127.0.0.1');
    expect(lastLoginDate.length).toBe(1);
    expect(lastIpLogin.length).toBe(1);
  });

  it('should not render the last login information when is not sent', async () => {
    const { container } = render(<Options listOptions={menuMock} location={'/dale/inicio'}></Options>);
    const lastLoginDate = screen.queryAllByText('Fecha último ingreso:');
    const lastIpLogin = screen.queryAllByText('IP:');
    expect(lastLoginDate.length).toBe(0);
    expect(lastIpLogin.length).toBe(0);
  });
});

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
