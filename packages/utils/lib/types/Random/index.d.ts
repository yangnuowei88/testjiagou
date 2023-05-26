/**
 * @module Random
 * @description 随机相关函数
 */
/**
 * Return a random float number between the given values and the given precision
 *
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 *
 * @param {number} [min=0] - min value
 * @param {number} [max=1] - max value
 * @param {number} [precision=2] - the float precision
 * @returns {number} - random float number
 */
export function randomFloat(min?: number, max?: number, precision?: number): number;
/**
 * Return a random integer number between the given values and the given precision
 *
 * @example
 * randomInt(0, 1);
 * randomInt(-10, 0);
 * randomInt(-550, 444);
 *
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} random integer number
 */
export function randomInt(min: number, max: number): number;
/**
 * Return a random number between the given values and the given precision
 *
 * @example
 * randomNumber(0, 1);
 * randomNumber(-10, 0, 5);
 * randomNumber(-550, 444);
 *
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random number
 */
export function randomNumber(min: number, max: number): number;
/**
 * @description 产生任意长度随机字母数字组合
 * @param {String} randomFlag 是否任意长度
 * @param {String} min 任意长度最小位[固定位数]
 * @param {String} max 任意长度最大位
 * @return {String}
 *
 * @example
 * randomWord(false, 10, 100) => 8rgBAH1AiS
 */
export function randomWord(randomFlag: string, min: string, max: string): string;
/**
 * @description 固定长度随机字符串
 */
export function randomWordByLength(len?: number): string;
/**
 * Returns a random color hexadecimal
 *
 * @example
 * randomColor() // '#243ff4'
 * randomColor() // '#64e30f'
 *
 * @returns {string} a new random color
 */
export function randomColor(): string;
/**
 * Export a random rgb color (red, green, blue)
 *
 * @example
 * randomRGBColor() // 'rgb(67.77, 251.89, 163.64)'
 * randomRGBColor() // 'rgb(142.84, 37.61, 173.32)'
 *
 * @returns {string}
 */
export function randomRGBColor(): string;
/**
 * Export a random rgba color (red, green, blue, alpha)
 *
 * @example
 * randomRGBAColor() // 'rgba(73.67, 177.51, 5.37, 0.82158)'
 * randomRGBAColor() // 'rgba(187.17, 195.28, 28.24, 0.73586)'
 *
 * @returns {string}
 */
export function randomRGBAColor(): string;
