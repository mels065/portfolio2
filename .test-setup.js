import { configure } from 'enzyme';
import { JSDOM } from 'jsdom';
import Adapter from 'enzyme-adapter-react-15';

import register from 'ignore-styles';

register(['.scss', '.jpg']);

configure({ adapter: new Adapter() });

process.env.NODE_ENV = 'test';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const win = dom.window;
const doc = win.document;

global.document = doc;
global.window = win;

for (const key in window) {
  if (!window.hasOwnProperty(key) || key in global) continue;
  global[key] = window[key];
}
