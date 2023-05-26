/**
 * @module Math
 * @description Math 相关操作
 */
/**
 * Returns the median of the givens numbers
 *
 * @example median(1); // 1
 * @example median(1,2); // 1.5
 * @example median(1,2,3,4); // 2.5
 * @example median(1,2,3,4,5); // 3
 * @example median(...[1,2,3,4]); // 2.5
 *
 * @param  {...number} numbers - the numbers to get the median
 * @returns {number}
 */
export function median(...numbers: number[]): number;
/**
 * Returns the most repeated element in an array
 *
 * @example
 * mode([1, 2, 2, 3, 4]); // 2
 * mode(["apple", "banana", "banana", "cherry"]); // "banana"
 *
 * @param  {Array} args - the elements to get the mode
 * @returns {*}
 */
export function mode(...args: any[]): any;
/**
 * Returns an array of numbers between the `start` and `end` parameters,
 * incrementing by the `step` parameter.
 * Optionally, the values within the specified `skip` range can be skipped.
 *
 * @example
 * range(1, 5); // [1, 2, 3, 4, 5]
 * range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * range(0, 100, 100) // [0, 100]
 * range(1, 100, 100) // [1]
 * range(0, 10, 1, [{start:2, end:8}]) // [0, 1, 9, 10]
 * range(0, 10, 1, [{start:2, end:4}, {start:7, end:8}]) // [0, 1, 5, 6, 9, 10]
 *
 * @param {number} start - The starting point of the range
 * @param {number} end - The ending point of the range
 * @param {number} [step=1] - The increment value
 * @param {Array<{start: number, end: number}>} [skip=[]] - The range of values to skip
 * @returns {number[]} An array of numbers
 */
export function range(start: number, end: number, step?: number, skip?: Array<{
    start: number;
    end: number;
}>): number[];
/**
 * 保留位数
 *
 * @export
 * @param {*} originalNum 原始值
 * @param {number} [keepCount=1] 保留的位数，默认1
 * @param {boolean} [round=true] 四舍五入，默认为true，否则直接截取
 * @param {boolean} [keepNegativeZero=false] 是否保留负零，默认为false，不保留
 * @returns {string} 调整后的数字字符串
 */
export function fixedDecimal(originalNum: any, keepCount?: number, round?: boolean, keepNegativeZero?: boolean): string;
