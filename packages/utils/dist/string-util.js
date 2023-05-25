/**
 * 获取字符串长度，英文字符 长度1，中文字符长度2
 * @param {*} str
 */
const getStrFullLength = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.split('').reduce((pre, cur) => {
    const charCode = cur.charCodeAt(0);
    if (charCode >= 0 && charCode <= 128) {
      return pre + 1;
    }
    return pre + 2;
  }, 0);
};

/**
 * 截取字符串，根据 maxLength 截取后返回
 * @param {*} str
 * @param {*} maxLength
 */
const cutStrByFullLength = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let maxLength = arguments.length > 1 ? arguments[1] : undefined;
  let showLength = 0;
  return str.split('').reduce((pre, cur) => {
    const charCode = cur.charCodeAt(0);
    if (charCode >= 0 && charCode <= 128) {
      showLength += 1;
    } else {
      showLength += 2;
    }
    if (showLength <= maxLength) {
      return pre + cur;
    }
    return pre;
  }, '');
};

export { cutStrByFullLength, getStrFullLength };
