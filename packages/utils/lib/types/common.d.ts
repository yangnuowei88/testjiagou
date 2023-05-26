export function debounce(fn: any, timeout?: number): (...args: any[]) => void;
/**
 * 节流(被调用n次,只在time间隔时间点运行)
 * @param fn 回调函数
 * @param timeout 延时
 */
export function throttle(fn: any, timeout?: number): (...args: any[]) => void;
/**
 * 深拷贝，请勿用于拷贝非纯对象(函数，等将丢失)
 * @param {Object|Array}data 输入参数
 */
export function deepClone(data: any | any[]): any;
/**
 * 实现分时的函数，在intervalTime时间间隔内执行count次fn函数
 * @param {Array}     ary       每次fn执行需要的参数数组
 * @param {Function}  fn        处理函数
 * @param {Number}    count     每个时间间隔内执行的次数
 * @param {Number}    interval  时间间隔
 */
export function timeChunk(ary: any[], fn: Function, count: number, interval: number): () => void;
