import { assign } from 'lodash';

if (!has(Object, 'assign')) {
  Object.assign = assign;
}
import * as loader from './src/loader';
import * as storage from './src/storage';
export * from './src/loader';
export const LocalStorage = storage;
export default Object.assign({}, loader, {LocalStorage: storage});
