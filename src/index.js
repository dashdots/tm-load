import * as loader from './src/loader';
import storage from './src/storage';
export * from './src/loader';
export const localStorage = storage;
export default Object.assign({}, loader, {localStorage: storage});
