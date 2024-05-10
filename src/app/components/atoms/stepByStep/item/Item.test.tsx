import Item from './Item';
import { shallow } from 'enzyme';
import React from 'react';

require('fake-indexeddb/auto');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Item test atom', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  it('Render Item atom with class', () => {
    const wrapper = shallow(
      <Item
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/enrollment/inicio'}
      ></Item>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render Item atom with diferent location', () => {
    const wrapper = shallow(
      <Item
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [
            {
              idOptions: '2',
              name: 'dashboard',
              path: '/enrollment/inicio',
              icon: 'dashboard',
              order: '1',
              optionsList: [],
              group: '1'
            }
          ],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'reports'}
      ></Item>
    );
    expect(wrapper).toBeDefined();
  });

  it('useEffect', () => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    const wrapper = shallow(
      <Item
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [
            {
              idOptions: '2',
              name: 'dashboard',
              path: '/enrollment/inicio',
              icon: 'dashboard',
              order: '1',
              optionsList: [],
              group: '1'
            }
          ],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/enrollment/inicio'}
      ></Item>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render Item atom with logout path', () => {
    const wrapper = shallow(
      <Item
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: 'logout',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'inicio'}
      ></Item>
    );
    expect(wrapper).toBeDefined();
  });
});
