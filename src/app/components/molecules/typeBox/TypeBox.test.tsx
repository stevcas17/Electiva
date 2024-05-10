import { shallow, mount } from 'enzyme';
import { icons } from '../../../../utils/icons/constants';
import TypeBox from './TypeBox';

describe('TypeBox test atom', () => {
  it('Render TypeBox atom with class', () => {
    const wrapper = shallow(
      <TypeBox children={null} className="container__underConstruction" navBack={false} footer={true}></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render TypeBox atom with NavBack True', () => {
    const wrapper = shallow(
      <TypeBox children={null} className="container__underConstruction" navBack={true} footer={true}></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render TypeBox atom with Emoji', () => {
    const wrapper = shallow(
      <TypeBox
        children={null}
        Emoji={'Emoji'}
        className="container__underConstruction"
        navBack={true}
        footer={true}
      ></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render TypeBox atom with EmojiString', () => {
    const wrapper = shallow(
      <TypeBox
        children={null}
        Emoji={'Emoji'}
        EmojiString={'EmojiString'}
        className="container__underConstruction"
        navBack={true}
        footer={true}
      ></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render TypeBox atom with Alert', () => {
    const wrapper = mount(
      <TypeBox
        children={null}
        Emoji={'Emoji'}
        EmojiString={'EmojiString'}
        className="container__underConstruction"
        onNavBackFunc={jest.fn()}
        alertConfig={{
          showModal: true,
          message: 'message',
          description: 'description',
          onButtonClickFunction: jest.fn(),
          onCloseFunction: jest.fn(),
          type: 'ALERT',
          showButton: true,
          showCloseButton: true,
          buttonContinueText: 'new'
        }}
      ></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render TypeBox atom with Alert 2', () => {
    const wrapper = mount(
      <TypeBox
        children={null}
        alertConfig={{
          showModal: true,
          message: 'message',
          description: 'description',
          onButtonClickFunction: jest.fn(),
          onCloseFunction: jest.fn(),
          type: 'ALERT',
          showButton: true,
          showCloseButton: true,
          buttonContinueText: 'new'
        }}
      ></TypeBox>
    );
    expect(wrapper).toBeDefined();
  });
});
