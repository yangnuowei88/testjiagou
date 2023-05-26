declare namespace _default {
    export { cookieSetItem };
    export { cookieGetItem };
    export { cookieRemoveItem };
    export { setItem };
    export { getItem };
    export { removeItem };
}
export default _default;
/**
 * 设置cookie
 * @param {string} key 键
 * @param {string} val 值
 * @param {Date|number} days 过期时间|过期天数
 * @param {string} path cookie的path
 */
declare function cookieSetItem(key: string, val: string, days: Date | number, path?: string): void;
/**
 * 获取cookie
 * @param {string} key 键
 * @returns {string} cookie值
 */
declare function cookieGetItem(key: string): string;
/**
 * 清除cookie
 * @param {string} key 键
 */
declare function cookieRemoveItem(key: string): void;
/**
 * 设置localStorage函数
 * @param {string} key 键
 * @param {string} val 值
 * @param {Date|number} days 过期时间|过期天数
 * @param {number} hours 过期小时数
 */
declare function setItem(key: string, val: string, days: Date | number, hours: number): void;
/**
 * 获取
 * @param {string} key 键
 * @returns {string} 值
 */
declare function getItem(key: string): string;
/**
 * 清除
 * @param {string} key 键
 */
declare function removeItem(key: string): void;
