import { shallow } from 'enzyme';
import Input from './InputFrom';
import React from 'react';

describe('Input test atom', () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];

  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  const setHookTestState = (newState: any) => {
    const setStateMockFn = () => {};
    return Object.keys(newState).reduce((acc, val) => {
      acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
      return acc;
    }, jest.fn());
  };
  let hookState = {
    ValueInput: '',
    inputEdit: false,
    errorStatus: false,
    errorValue: ''
  };

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
  });

  afterEach(() => {
    useEffect.mockRestore();
  });

  it('Component exist', () => {
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} placeholder={'Buscar...'} className={'contInput'} value={'123'}></Input>
    );
    expect(wrapper).toBeDefined();
  });

  it('Use effect if way', () => {
    hookState.ValueInput = null;
    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={null}
        errorStatusExternal={true}
        disabled={true}
        success={true}
      ></Input>
    );
    expect(wrapper).toBeDefined();
  });

  it('Input handle events', () => {
    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input
        eventChange={() => 'fn-test'}
        onChange={() => 'fn-test'}
        onBlur={() => 'fn-test'}
        className={'contInput'}
        value={'123'}
      ></Input>
    );
    const container = wrapper.find('input');
    container.simulate('change', { target: { value: '123', validity: { valid: true } } });
    container.simulate('blur', { target: { value: '123' } });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with email rules', () => {
    const rules = [
      {
        name: 'email',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with require rules', () => {
    const rules = [
      {
        name: 'require',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with string rules', () => {
    const rules = [
      {
        name: 'string',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with number rules', () => {
    const rules = [
      {
        name: 'number',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with textSpace rules', () => {
    const rules = [
      {
        name: 'textSpace',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with fixedSize rules', () => {
    const rules = [
      {
        name: 'fixedSize',
        size: 3,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with minSize rules', () => {
    const rules = [
      {
        name: 'minSize',
        size: 3,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    container.simulate('blur', { target: { value: '1234' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with minSize null rules', () => {
    const rules = [
      {
        name: 'minSize',
        size: null,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with maxSize rules', () => {
    const rules = [
      {
        name: 'maxSize',
        size: 3,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    container.simulate('blur', { target: { value: '1234' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with maxSize null rules', () => {
    const rules = [
      {
        name: 'maxSize',
        size: null,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with equalTo rules', () => {
    const rules = [
      {
        name: 'equalTo',
        size: 0,
        compare: '123',
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: '123' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with miniOneMayus rules', () => {
    const rules = [
      {
        name: 'miniOneMayus',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'Abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with address rules', () => {
    const rules = [
      {
        name: 'address',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with bussinessName rules', () => {
    const rules = [
      {
        name: 'bussinessName',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with miniOneMinus rules', () => {
    const rules = [
      {
        name: 'miniOneMinus',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with miniOneNumber rules', () => {
    const rules = [
      {
        name: 'miniOneNumber',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with miniOneSpecial rules', () => {
    const rules = [
      {
        name: 'miniOneSpecial',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with notCharSpecial rules', () => {
    const rules = [
      {
        name: 'notCharSpecial',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with notContaint rules', () => {
    const rules = [
      {
        name: 'notContaint',
        size: 0,
        compare: '123',
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input handle event with notContaint null rules', () => {
    const rules = [
      {
        name: 'notContaint',
        size: 0,
        compare: null,
        message: ''
      }
    ];

    React.useState = setHookTestState(hookState);
    const wrapper = shallow(
      <Input onChange={() => 'fn-test'} onBlur={() => 'fn-test'} value={'123'} rules={rules}></Input>
    );
    const container = wrapper.find('input');
    container.simulate('blur', { target: { value: 'abc' }, preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input with icon left', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconLeft={'test-icon'}
      ></Input>
    );
    const container = wrapper.find('.container__input-bodyIcon');
    container.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input with icon left and callback', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconLeft={'test-icon'}
        onClickIconLeft={() => 'fn-test'}
        errorStatusExternal={true}
      ></Input>
    );
    const container = wrapper.find('.container__input-bodyIcon');
    container.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input with icon right view', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconRightView={true}
      ></Input>
    );
    expect(wrapper).toBeDefined();
  });

  it('Input with icon right view error', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconRightView={true}
        errorStatusExternal={true}
      ></Input>
    );
    expect(wrapper).toBeDefined();
  });
  it('Input with icon right custom', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconRightCustom={true}
      ></Input>
    );
    const container = wrapper.find('.container__input-bodyIcon');
    container.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input with icon right custom with callback', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        iconRightCustom={true}
        onClickIconRightCustom={() => 'fn-test'}
        errorStatusExternal={true}
      ></Input>
    );
    const container = wrapper.find('.container__input-bodyIcon');
    container.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toBeDefined();
  });

  it('Input with assistive text', () => {
    const wrapper = shallow(
      <Input
        onChange={() => 'fn-test'}
        placeholder={'Buscar...'}
        className={'contInput'}
        value={'123'}
        assistiveText={'assistive-test'}
        errorStatusExternal={true}
      ></Input>
    );
    expect(wrapper).toBeDefined();
  });
});
