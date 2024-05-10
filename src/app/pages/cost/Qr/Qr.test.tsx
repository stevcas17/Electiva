import { shallow } from 'enzyme';
import Link, { Qr } from '.';
import { historyMock } from '../../../../../__mocks__/fileMock.js';
import { render, screen } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Business test page', () => {
  it('Render Link page with history', () => {
    const wrapper = shallow(<Link history={historyMock}></Link>);
    expect(wrapper).toBeDefined();
  });
  it('Test cardBankQrRates', () => {
    render(<Qr history={historyMock} />);
    screen.debug();
    const buttonBankBogota = screen.getByAltText('bbogota');
    const buttonBankOccidente = screen.getByAltText('boccidente');
    const buttonBankPopular = screen.getByAltText('bpopular');
    const buttonBankVillas = screen.getByAltText('bavvillas');
    const buttonBankDale = screen.getByAltText('bdale');
    expect(buttonBankBogota).toBeDefined();
    expect(buttonBankOccidente).toBeDefined();
    expect(buttonBankPopular).toBeDefined();
    expect(buttonBankVillas).toBeDefined();
    expect(buttonBankDale).toBeDefined();
  });
});
