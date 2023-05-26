/**
 * @module Dom
 * @description dom 相关操作
 */
/**
 * 添加样式类
 * @param {Element} el 元素
 * @param {String} className 样式名
 */
export function addClass(el: Element, className: string): void;
/**
 * 移除样式类
 * @param {Element} el 元素
 * @param {String} className 样式名
 */
export function removeClass(el: Element, className: string): void;
/**
 * 判断是否有样式类
 * @param {Element} el 元素
 * @param {String} className 样式类
 */
export function hasClass(el: Element, className: string): boolean;
/**
 * 获取/设置data-*
 * @param {Element} el 元素
 * @param {String} name 名称
 * @param {Any} val 需要设置的值
 */
export function getData(el: Element, name: string, val: Any): string | void;
/**
 * 获取元素尺寸
 * @param {Element} el 元素
 */
export function getRect(el: Element): {
    top: any;
    left: any;
    width: any;
    height: any;
};
/**
 * 复制到剪贴板
 * @param {String} str 需要复制的字符串
 */
export function copyToClipboard(str: string): void;
/**
 * 滚动html到顶部
 */
export function scrollToTop(): void;
/**
 * 获取计算样式
 * @param {Object} ele
 * @returns {Object} 样式对象
 */
export function getStyle(ele: any): any;
/**
 * 添加样式
 * @param {Element} el 元素
 * @param {Object} styleObj 样式obj
 */
export function addStyle(el: Element, styleObj: any): void;
/**
 * 判断是否支持css3 变量
 *
 * @export
 * @returns 是否支持
 */
export function canSupportCssVar(): any;
/**
 * 检查是否支持webp格式图片
 *
 * @export
 * @returns 是否支持webp
 */
export function supportWebp(): boolean;
/**
 * 生成svg文本
 *
 * @export
 * @param {*} [{
 *   width = 300,
 *   height = 150,
 *   fontSize = 14,
 *   fontFamily = 'system-ui, sans-serif',
 *   color = '#a2a9b6',
 *   opacity = 1,
 *   x = 50,
 *   y = 50,
 *   content = 'svg测试文本',
 *   transform = 'rotate(0,0,0)'
 * }={}]
 * @return {String} svg字符串（未转义）
 */
/**
 * 加载css
 *
 * @export
 * @param {String} href css地址
 * @param {Object} [options={ rel: 'stylesheet' }] 额外options
 * @return {Promise}  promise实例
 */
export function loadCss(href: string, options?: any): Promise<any>;
/**
 * 加载js
 *
 * @export
 * @param {String} src script地址
 * @param {Object} [options={ type: 'text/javascript' }] 额外options
 * @return {Promise}  promise实例
 */
export function loadJs(src: string, options?: any): Promise<any>;
/**
 * @description 获取scrollbar 宽度
 */
export function getScrollbarWidth(): number;
