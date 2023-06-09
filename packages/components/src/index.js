/* 脚本自动生成入口文件，根据components.json './build/bin/build-entry.js' */

//import CustomEventPlugin from '@sddz/utils/dist/vue/event';
import JsonEditor from './json-editor/index.js';
import OverviewTimeline from './overview-timeline/index.js';
import QueryTags from './query-tags/index.js';
import CountDown from './count-down/index.js';
import Result from './result/index.js';
import Ellipsis from './ellipsis/index.js';
import NumberInfo from './number-info/index.js';
import Sticky from './sticky/index.js';
import BacktoTop from './backto-top/index.js';

const components = [
  JsonEditor,
  OverviewTimeline,
  QueryTags,
  CountDown,
  Result,
  Ellipsis,
  NumberInfo,
  Sticky,
  BacktoTop
];

const install = function(Vue) {
  //Vue.use(CustomEventPlugin);

  components.forEach(component => {
    Vue.component(component.name, component);
  });


};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.3.25',
  install,
  JsonEditor,
  OverviewTimeline,
  QueryTags,
  CountDown,
  Result,
  Ellipsis,
  NumberInfo,
  Sticky,
  BacktoTop
};
