/**
 * @module TypeJudge
 * @description 类型判断函数
 */
/**
 * 判断是否为空（null、'',[],{},0）
 *
 * @export
 * @param {Any} obj 需要判断的对象
 * @returns {Boolean} 是否为空
 */
export function isEmpty(obj: Any): boolean;
export function isArray(arr: any): boolean;
/**
 * 判断是否为类数组
 * @param {Collection} collection
 */
export function isArrayLike(collection: Collection): boolean;
/**
 * typeOf
 * @param {Object} obj
 * @return {String}
 */
export function typeOf(obj: any): string;
/**
 * @description 是否为整数
 * @param {any} number 需要判断的参数
 * @return {boolean} true | false
 *
 * @example
 * isInteger(3) => true
 * isInteger(3.3) => false
 * isInteger('') => false
 * isInteger('3') => false
 * isInteger(true) => false
 * isInteger([]) => false
 */
export function isInteger(number: any): boolean;
export function isFinite(val: any): any;
/**
 * 判断是否为函数
 * @param {Any} fn 需要判断的对象
 */
export function isFunction(fn: Any): boolean;
/**
 * 判断数组或对象是否为空
 * @param {Any} obj
 */
export function isEmptyArrOrObj(obj: Any): boolean;
