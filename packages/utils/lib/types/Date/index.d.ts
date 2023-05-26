/**
 * @module Date
 * @description 日期时间相关函数
 */
/**
 * 获取日期字符串
 * @param {Date|string|number} ts 要转换的时间
 * @param {string} format 日期格式
 * @returns {string|*} 日期字符串
 */
export function getDateString(ts: Date | string | number, format?: string): string | any;
/**
 * 获取时间字符串
 * @param {Date|string|number} ts 要转换的时间
 * @param {string} format 日期格式
 * @returns {string|*} 时间字符串
 */
export function getDatetimeString(ts: Date | string | number, format?: string): string | any;
/**
 * @description 获取当前日期
 * @param {String} seperator 连接字符 默认 -
 * @returns {String} 当前日期
 * @example
 * getNowDate() => "2020-05-18"
 */
export function getNowDate(seperator?: string): string;
/**
 * @description 获取某月份的天数
 * @param {String} year
 * @param {String} month
 * @return {Number} 某月份的天数
 *
 * @example
 * getDaysInOneMonth({year: 2020, month: 5}) => 31
 */
export function getDaysInOneMonth({ year, month }: string): number;
/**
 * 合法日期判断
 * @param {Date} date 要判断的日期
 * @returns {boolean} 是否合法
 */
export function isValidDate(date: Date): boolean;
/**
 * 毫秒转秒
 *
 * @export
 * @param {number} ms 毫秒
 * @returns 秒
 */
export function ms2s(ms: number): number;
/**
 * 毫秒转分
 *
 * @export
 * @param {number} ms 毫秒
 * @returns 分
 */
export function ms2m(ms: number): number;
/**
 * 毫秒转小时
 *
 * @export
 * @param {number} ms 毫秒
 * @returns 小时
 */
export function ms2h(ms: number): number;
