import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('fake-indexeddb/auto');

configure({ adapter: new Adapter() });
