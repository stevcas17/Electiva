import { shallow } from 'enzyme';
import { ModalQrConditions } from './index';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Test ModalContactAdvisor', () => {
  it('Render open ModalContactAdvisor', () => {
    const wrapper = shallow(<ModalQrConditions showModal={true} />);
    expect(wrapper).toBeDefined();
  });
  it('Render close ModalContactAdvisor', () => {
    const wrapper = shallow(<ModalQrConditions showModal={false} closeModal={() => true} />);
    expect(wrapper).toBeDefined();
  });
  it('button close ModalContactAdvisor', async () => {
    render(<ModalQrConditions showModal={true} closeModal={() => true} />);
    const btnClose = screen.getByTestId('onCloseFunctionButton');
    await fireEvent.click(btnClose);
  });
  it('button close', async () => {
    render(<ModalQrConditions showModal={true} closeModal={() => true} />);
    const buttonClose = screen.getByRole('button', { name: 'Aceptar' });
    await fireEvent.click(buttonClose);
  });
});
