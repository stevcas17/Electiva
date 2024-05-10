import { shallow } from 'enzyme';
import { ModalValidator } from './ModalValidator';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Test <ModalValidator />', () => {
  it('Render open ModalValidator', () => {
    const wrapper = shallow(<ModalValidator showModal={true} image={''} message={'test message'} />);
    expect(wrapper).toBeDefined();
  });
  it('Render close ModalValidator', () => {
    const wrapper = shallow(
      <ModalValidator showModal={false} closeModal={() => true} image={''} message={'test message'} />
    );
    expect(wrapper).toBeDefined();
  });
  it('Click close ModalValidator', async () => {
    render(<ModalValidator showModal={true} closeModal={() => true} image={''} message={'test message'} />);
    const btnClose = screen.getByTestId('modal-button-close');
    await fireEvent.click(btnClose);
  });
});
