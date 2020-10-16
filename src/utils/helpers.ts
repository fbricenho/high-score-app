/**
 * Generate Random Integer between 2 numbers
 * @param min number
 * @param max number
 */
export const generateRandomInteger = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));
