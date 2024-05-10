import { Image } from './Image';
import { shallow } from 'enzyme';
import { icons, images } from '../../../../utils/icons/constants';

describe('Image test atom', () => {
  it('Render Image atom with class', () => {
    const wrapper = shallow(
      <Image src={images.AlertIcon} alt={'Regresar'} width={'10px'} height={'10px'} className={'icons-button'}></Image>
    );
    expect(wrapper).toBeDefined();
  });
  it('Render Image atom without class', () => {
    const wrapper = shallow(
      <Image src={images.AlertIcon} alt={'Regresar'} width={'10px'} height={'10px'} className={null}></Image>
    );
    expect(wrapper).toBeDefined();
  });
  it('Render Image atom simple', () => {
    const wrapper = shallow(
      <Image src={images.AlertIcon} alt={null} className={null} width={null} height={null}></Image>
    );
    expect(wrapper).toBeDefined();
  });
});
