import { shallow } from 'enzyme';
import Microsites from './Microsites';
import { historyMock } from '../../../../../__mocks__/fileMock.js';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Business test page', () => {
  it('Render Microsites page with history', () => {
    const wrapper = shallow(<Microsites history={historyMock}></Microsites>);
    expect(wrapper).toBeDefined();
  });
  it('Test selectionType', () => {
    render(<Microsites history={historyMock}></Microsites>);
    const divCardItem = screen.getByTestId('cost.button');
    fireEvent.click(divCardItem);
    expect(historyMock.push).toHaveBeenCalled();
  });
});
