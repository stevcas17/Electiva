import { shallow } from 'enzyme';
import Alerts from './Alert';

describe('Alert test atom', () => {
  it('Render Alert atom ', () => {
    const wrapper = shallow(
      <Alerts
        message={'message'}
        description={'description'}
        showModal={true}
        type={'SUCCESS'}
        onButtonClickFunction={() => 'test-fn'}
        onCloseFunction={() => 'test-fn'}
        showButton={true}
        showCloseButton={true}
        buttonContinueText={'buttonContinueText'}
      ></Alerts>
    );
    expect(wrapper).toBeDefined();
  });
  it('Render Alert atom void', () => {
    const wrapper = shallow(<Alerts message={'message'} description={'description'} showModal={false}></Alerts>);
    expect(wrapper).toBeDefined();
  });
  it('Click button', () => {
    const wrapper = shallow(
      <Alerts message={'message'} description={'description'} showModal={true} showButton={true}></Alerts>
    );
    expect(wrapper).toBeDefined();
    const container = wrapper.find('.btnContinue');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('Render Alert atom with showModal false', () => {
    const wrapper = shallow(
      <Alerts
        message={'message'}
        description={'description'}
        showModal={true}
        type={'SUCCESS'}
        showButton={true}
        showCloseButton={true}
        buttonContinueText={'buttonContinueText'}
      ></Alerts>
    );
    const container = wrapper.find('.body__alert-close');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('Render Alert atom with showModal Modified', () => {
    const wrapper = shallow(
      <Alerts
        message={'message'}
        description={'description'}
        showModal={true}
        type={'SUCCESS'}
        showButton={true}
        showCloseButton={true}
        buttonContinueText={'buttonContinueText'}
        onCloseFunction={null}
      ></Alerts>
    );
    const container = wrapper.find('.body__alert-close');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
});
