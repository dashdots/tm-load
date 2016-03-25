const assign = require('object.assign/polyfill')();
import * as loader from './src/loader';
import * as storage from './src/storage';
export * from './src/loader';
export const LocalStorage = storage;
export default assign({}, loader, {LocalStorage: storage});
