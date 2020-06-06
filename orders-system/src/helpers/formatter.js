/**
 * Retrieve first name in a string
 * @param {string} name
 */
export const firstName = (name) => name.split(' ')[0];

/**
 * Retrieve a last name in a string
 *
 * @param {string} name
 */
export const lastName = (name) => {
  const pieces = name.split(' ');
  return pieces[pieces.length - 1];
};

/**
 * Format text in singular or plural based in amount
 * provided as argument in function
 *
 * @param {int} amount
 * @param {string} singularWord
 * @param {string} pluralWord
 */
export const singularOrPlural = (amount, singularWord, pluralWord) => (
  (amount > 1) ? pluralWord : singularWord
);
