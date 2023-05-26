/**
 * @module String
 * @description 字符串相关函数
 */
/**
 * @description 生成UUID
 * @return {String} 返回字符串
 *
 * @example
 * uuid() => '026841df-27db-4ec6-b4e8-6a4c7ee7854f'
 */
export function uuid(): string;
/**
 * 是否是特殊字符
 */
export function isSpecialChar(str: any): boolean;
/**
 * Invert all letters from a given text
 *
 * @example reverseString("beep"); // peeb
 * @example reverseString("Beep"); // peeB
 * @example reverseString("Beep Boop"); // pooB peeB
 * @example reverseString("beep boop 1 20"); // 02 1 poob peeb
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function reverseString(str: string): string;
/**
 * echarts 文字换行
 * @param {*} params 数据
 * @param {*} num 以几个字符为一行
 * @returns
 */
export default function fieldWrap(params: any, num: any): string;
/**
 * transJson
 * @param {String} params
 * @return {JSON}
 */
export function transJson(params: string): JSON;
export function str2kebab(str: string): string;
