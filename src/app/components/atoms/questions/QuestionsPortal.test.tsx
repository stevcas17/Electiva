import { shallow, mount } from 'enzyme';
import { LinkQuestions } from '../../../data/templates-data';
import Questions from './QuestionsPortal';
import React from 'react';
import { Accordion, AccordionSummary } from '@mui/material';

describe('Questions test atom', () => {
  let useEffect;
  let wrapper;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    // .... other things ....
  });

  afterEach(() => useEffect.mockRestore());

  it('Render Questions atom with class', () => {
    wrapper = shallow(<Questions query={''} questionArray={LinkQuestions}></Questions>);
    expect(wrapper).toBeDefined();
  });

  it('Useeffect Initial', () => {
    const setQuestions = jest.fn();
    const setcurrentQuestions = jest.fn();

    const useStateQuestions = jest.spyOn(React, 'useState');
    const useStateSpysdos = jest.spyOn(React, 'useState');
    const questions = [
      {
        title: 'string',
        description: 'string',
        id: 1
      },
      {
        title: 'string',
        description: 'string',
        id: 2
      }
    ];
    const currentQuestions = questions;

    useStateQuestions.mockImplementation(() => [questions, setQuestions] as any);
    useStateSpysdos.mockImplementation(() => [currentQuestions, setcurrentQuestions] as any);

    wrapper = mount(<Questions query={'comercio'} questionArray={LinkQuestions}></Questions>);
    expect(wrapper).toBeDefined();
  });

  it('Useeffect Initial other query', () => {
    const setQuestions = jest.fn();
    const setcurrentQuestions = jest.fn();

    const useStateQuestions = jest.spyOn(React, 'useState');
    const useStateSpysdos = jest.spyOn(React, 'useState');
    const questions = [
      {
        title: 'string',
        description: 'string',
        id: 1
      },
      {
        title: 'string',
        description: 'string',
        id: 2
      }
    ];
    const currentQuestions = questions;

    useStateQuestions.mockImplementation(() => [questions, setQuestions] as any);
    useStateSpysdos.mockImplementation(() => [currentQuestions, setcurrentQuestions] as any);

    wrapper = mount(<Questions query={'string'} questionArray={LinkQuestions}></Questions>);
    expect(wrapper).toBeDefined();
  });

  it('Handle change', () => {
    wrapper = shallow(<Questions query={'comercio'} questionArray={LinkQuestions}></Questions>);
    const container = wrapper.find(Accordion);
    container.at(0).prop('onChange')({});
    expect(wrapper).toBeDefined();
  });

  it('Handle change is expanded', () => {
    wrapper = shallow(<Questions query={'comercio'} questionArray={LinkQuestions}></Questions>);
    const container = wrapper.find(Accordion);
    container.at(0).prop('onChange')({}, true);
    expect(wrapper).toBeDefined();
  });
});
