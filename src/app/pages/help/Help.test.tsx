import { mount } from 'enzyme';
import Help from './Help';
import { historyMock } from '../../../../__mocks__/fileMock.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Help test page', () => {
  let wrapper;

  const scrollToMock = jest.fn();

  beforeAll(() => {
    Object.defineProperty(historyMock, 'location', { value: { state: 'lineAttention' } });
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });
  });

  beforeEach(() => {
    jest.useFakeTimers();

    act(() => {
      wrapper = mount(
        <Router>
          <Help history={historyMock}></Help>
        </Router>
      );

      jest.runAllTimers();
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
    wrapper = undefined;
  });

  it('should call window.scrollTo when Help component is render', () => {
    expect(wrapper).toBeDefined();
    expect(scrollToMock).toHaveBeenCalled();
  });

  it('should add css class active-tabs to tab when it is clicked', () => {
    act(() => {
      const container = wrapper.find('.question-tabs-item');
      const tab = container.at(0);
      tab.prop('onClick')({});
      expect(tab.hasClass('active-tabs')).toBeTruthy();
    });
  });
});
