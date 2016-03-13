import * as loader from './src/loader';
import storage from './src/storage';
export * from './src/loader';
export default Object.assign({}, loader, {storage});
