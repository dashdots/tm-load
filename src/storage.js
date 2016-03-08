/**
 * Wrap LocalStorage simply
 */

/**
 * Return prefix of storage
 *
 */
export const getPrefix = () => {
  return typeof window.STORAGE_PREFIX !== 'undefined' ? window.STORAGE_PREFIX : '';
};

const prefix = getPrefix();
const Store = window.localStorage;

/**
 * Gets an item from localStorage
 * @param  {string} id
 *
 */
export const get = (id) => {
  try {
    return JSON.parse(Store.getItem(`${prefix}${id}`)).value;
  } catch (err) {
    return null;
  }
};

/**
 * Sets an item in localStorage
 * @param  {String} id
 * @param  {Any}    value
 *
 */
export const set = (id, value) => {
  return Store.setItem(`${prefix}${id}`, JSON.stringify({ value }));
};

/**
 * Remove item from localStorage
 * @param  {String} id
 *
 */
export const remove = (id) => {
  return Store.removeItem(`${prefix}${id}`);
};

/**
 * Return state to rehydrate store
 * @return {Object}
 *
 */
export const getHydratedState = () => {
  let state = get('state');
  return state || {};
};

/**
 * Sets the hydrated state
 * @param  {Object} state
 *
 */
export const setHydratedState = (state) => {
  return set('state', state);
};

/**
 * Adds a key to hydrated state
 * @param  {String} id
 * @param  {Any}  value
 */
export const addHydratedState = (id, value) => {
  return set('state', Object.assign({}, getHydratedState(), { id: value }));
};

export default {
  get,
  set,
  remove,
  getHydratedState,
  setHydratedState,
  addHydratedState,
};