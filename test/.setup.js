import { configure } from 'enzyme';
import jsdom, { JSDOM } from 'jsdom'
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
const win = dom.window
const doc = win.document

global.document = doc
global.window = win

for (let key in window) {
  if (!window.hasOwnProperty(key) || key in global) continue
  global[key] = window[key]
}
