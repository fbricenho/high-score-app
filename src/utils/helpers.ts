import { User } from "../types";

/**
 * Generate Random Integer between 2 numbers
 * @param min number
 * @param max number
 */
export const generateRandomInteger = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));

/**
 * Sort users by total points or by avegare (totalPoints / clicks)
 * @param a
 * @param b
 * @param byAvg
 */
export const sortUserWithCondition = (a: User, b: User, byAvg: boolean) =>
  byAvg
    ? divideWithCondition(b.totalPoints, b.clicks) - divideWithCondition(a.totalPoints, a.clicks)
    : b.totalPoints - a.totalPoints;

/**
 * Divide 2 numbers, if value is not possible to divide then return 0
 * @param value
 * @param divider
 * @return number
 */
export const divideWithCondition = (value: number, divider: number): number => (value ? value / divider : 0);
