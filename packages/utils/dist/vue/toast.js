import Vue from 'vue';

/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2020-05-08 16:57:58
 * @description: 为了使用简便而封装一层，方便统一修改 duration 或者做拦截处理
 */

/**
 * 统一toast信息弹层
 * @param {Object} param0
 */
function showToast(_ref) {
  let {
    message = '操作成功~',
    type = 'success',
    duration = 1500
  } = _ref;
  Vue.prototype.$message({
    message,
    type,
    duration
  });
}

/**
 * 成功信息提示
 * @param {string} message
 */
function successToast(message) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  Vue.prototype.$message({
    message,
    type: 'success',
    duration
  });
}
/**
 * 信息提示
 * @param {string} message
 */
function infoToast(message) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  Vue.prototype.$message({
    message,
    type: 'info',
    duration
  });
}

/**
 * 失败信息提示
 * @param {string} message
 */
function errorToast(message) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  Vue.prototype.$message({
    message,
    type: 'error',
    duration
  });
}
/**
 * 警告信息提示
 * @param {string} message
 */
function warningToast(message) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  Vue.prototype.$message({
    message,
    type: 'warning',
    duration
  });
}
function errorBox(content) {
  Vue.prototype.$alert(content, 'Error', {
    confirmButtonText: 'OK'
  });
}

export { errorBox, errorToast, infoToast, showToast, successToast, warningToast };
