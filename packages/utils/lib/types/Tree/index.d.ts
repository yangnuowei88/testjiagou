/**
 * @module Tree
 * @description 树形结构常用函数
 */
/**
 * @description list 数据结构 转换成 树结构
 * @param {Array} data 需要转换的数据
 * @param {String} id 节点 id
 * @param {String} pid 父级节点 id
 * @param {String} child 子树为节点对象的某个属性值
 * @param {Object} labels 需要新增的字段名集合 { label: 'category_name' }
 * @return {Array}
 *
 * @example
 * formatListToTree({data: [{id:1}, {id: 2}, {id: 3, pid: 1}]})
 * =>
 * [ { id: 1, children: [ {id: 3, pid: 1} ] }, { id: 2 } ]
 */
export function formatListToTree({ data, id, pid, child, labels, }: any[]): any[];
/**
 * @description list 数据结构 转换成 树结构
 * @param {Array} data 需要转换的数据
 * @param {object} options 配置信息
 * @param {String} id 节点 id
 * @param {String} pid 父级节点 id
 * @param {String} children 子树为节点对象的某个属性值
 * @param {String|number} root 指定根节点 value
 * @return {Array}
 *
 * @example
 * formatTree([{id:1, pid: 0}, {id: 2, pid: 0}, {id: 3, pid: 1}])
 * =>
 * [ { id: 1, pid: 0 children: [ {id: 3, pid: 1} ] }, { id: 2, pid: 0 } ]
 */
export function formatTree(data: any[], options: object): any[];
