import ErrorBox from './ErrorBox';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { images } from '../../../../utils/icons/constants';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

const globalAny: any = global;

globalAny.executeLogout = () => Promise.resolve(true);
const executeLogout = jest.fn(() => Promise.resolve(true));

describe('ErrorBox test component', () => {
  it('Render ErrorBox component', () => {
    const wrapper = shallow(
      <ErrorBox
        title={'Título de prueba'}
        message={'Mensaje de prueba'}
        image={images.Missing}
        buttonName={'Volver'}
        footer={true}
      ></ErrorBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Set useState mock and check buttons', async () => {
    delete window.location;
    window.location = {
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: 'enrollment',
      port: null,
      protocol: null,
      search: null,
      ancestorOrigins: null,
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn()
    };
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const wrapper = shallow(
      <ErrorBox
        title={'Título de prueba'}
        message={'Mensaje de prueba'}
        image={images.Missing}
        buttonName={'Volver'}
        footer={true}
      ></ErrorBox>
    );
    expect(wrapper).toBeDefined();

    const container = wrapper.find('.errorbox__message');
    expect(container.length).toBe(1);

    const button = wrapper.find('.errorbox__btn');
    button.at(0).prop('onClick')({});

    expect(setStateMock).toHaveBeenCalledWith(true);

    executeLogout().then(res => console.log('test', res));
    await Promise.resolve(true);
    await tick();
  });
});

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
