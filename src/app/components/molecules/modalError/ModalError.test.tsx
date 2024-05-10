import { shallow } from 'enzyme';
import { ModalError } from './ModalError';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Test <ModalError />', () => {
  it('Render open ModalError', () => {
    const wrapper = shallow(<ModalError showModal={true} />);
    expect(wrapper).toBeDefined();
  });
  it('Render close ModalError', () => {
    const wrapper = shallow(<ModalError showModal={false} closeModal={() => true} />);
    expect(wrapper).toBeDefined();
  });
  it('Click close ModalError', async () => {
    render(<ModalError showModal={true} closeModal={() => true} />);
    const btnClose = screen.getByTestId('modal-button-close');
    await fireEvent.click(btnClose);
  });
});
