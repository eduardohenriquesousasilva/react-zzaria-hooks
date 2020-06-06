/**
 * Retrieve user first name
 * @param {string} name
 */
export const userFirstName = (name) => name.split(' ')[0];

/**
 * Retrieve user last name
 * @param {string} name
 */
export const userLastName = (name) => {
  const pieces = name.split(' ');
  return pieces[pieces.length - 1];
};
