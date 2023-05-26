/**
 * @module Url
 * @description Url 相关操作
 */
/**
 * 解析查询字符串
 * @param {String} qs 需要解析的查询字符串
 * @return {Object} 解析后的对象
 * http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled
 * 解析后:
 * {
  user: 'anonymous',
  id: [123, 456],     // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京',        // 中文
  enabled: true,      // 未指定值的 key 约定值为 true
  d:true
}
 */
export function getQueryObject(qs?: string): any;
/**
 * 从URL中解析出protocol、host
 *
 * @export
 * @param {string} url 待解析的URL
 * @returns {URLOrigin} 解析出的protocol、host对象
 */
export function resolveURL(url: string): URLOrigin;
/**
 * @description 序列化对象为URL参数
 * @param {Object} obj 需要序列化的参数对象
 * @returns {String} 序列化后的字符串
 * @example
 * sequenceParam({a: 1, num: 20}) => "a=1&num=20"
 */
export function sequenceParam(obj: any): string;
/**
 * 判断是否同源URL
 *
 * @export
 * @param {*} requestURL 请求URL
 * @param {*} [requestURL2=window.location.href] 需要对应请求URL2，默认当前域
 * @returns
 */
export function isURLSameOrigin(requestURL: any, requestURL2?: any): boolean;
/**
 * 判断是否绝对路径
 *
 * @export
 * @param {string} url 待判断url
 * @returns {boolean} 是否绝对路径
 */
export function isAbsoluteURL(url: string): boolean;
/**
 * 拼接URL
 *
 * @export
 * @param {string} baseURL 基础URL
 * @param {string} [relativeURL] 相对URL
 * @returns {string} 完整URL
 */
export function combineURL(baseURL: string, relativeURL?: string): string;
/**
 * 从url中获取图片的流
 * @param {String} url 图片url
 */
export function getImgURLBlob(url: string): Promise<any>;
/**
 * 获取origin
 * origin = protocol + // + host
 * host = hostname + port
 *
 * @export
 * @returns origin字符串
 * 例子:返回 https://xxx.abc.com:456
 */
export function getOrigin(): string;
