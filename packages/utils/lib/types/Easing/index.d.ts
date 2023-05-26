/**
 * @module Easings
 * @description 常用缓动算法函数
 */
/**
 *
 * 匀速
 * @export
 * @param {Number} t 当前时间
 * @param {Number} b 开始值
 * @param {Number} c 变化值(结束值-开始值)
 * @param {Number} d 结束时间
 * @returns {Number} 当前时间对应的值
 */
export function Linear(t: number, b: number, c: number, d: number): number;
/**
 *
 * 先慢后快
 * @export
 * @param {Number} t 当前时间
 * @param {Number} b 开始值
 * @param {Number} c 变化值(结束值-开始值)
 * @param {Number} d 结束时间
 * @returns {Number} 当前时间对应的值
 */
export function easeIn(t: number, b: number, c: number, d: number): number;
/**
 *
 * 先快后慢
 * @export
 * @param {Number} t 当前时间
 * @param {Number} b 开始值
 * @param {Number} c 变化值(结束值-开始值)
 * @param {Number} d 结束时间
 * @returns {Number} 当前时间对应的值
 */
export function easeOut(t: number, b: number, c: number, d: number): number;
/**
 *
 * 先慢再匀速再慢
 * @export
 * @param {Number} t 当前时间
 * @param {Number} b 开始值
 * @param {Number} c 变化值(结束值-开始值)
 * @param {Number} d 结束时间
 * @returns {Number} 当前时间对应的值
 */
export function easeInOut(t: number, b: number, c: number, d: number): number;
