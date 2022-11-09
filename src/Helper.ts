/**
 * This file holds general helper functions for reuse in tests
 */

/**
 * Returns random string of requested length
 * if no length passed, length value will be 5
 * @param length length of the returned string (optional)
 * @param lettersOnly should random string contains letter only (optional)
 */
export function getRandomString(length = 5, lettersOnly = false): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const allowedChars: string = lettersOnly ? letters : `${letters}${numbers}`;

  return Array(length)
    .join()
    .split(',')
    .map(() => allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)))
    .join('');
}
