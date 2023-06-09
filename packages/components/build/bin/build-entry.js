let Components = require('../../components.json');
let fs = require('fs');
let render = require('json-templater/string');
let uppercamelcase = require('uppercamelcase');
let path = require('path');
let endOfLine = require('os').EOL;

let OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
let IMPORT_TEMPLATE = "import {{name}} from './{{package}}/index.js';";
let INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
//导入包dist/vue这个是要更换的呀
console.log(222)
//debugger;
let MAIN_TEMPLATE = `/* 脚本自动生成入口文件，根据components.json './build/bin/build-entry.js' */

//import CustomEventPlugin from '@sddz/utils/dist/vue/event';
{{include}}

const components = [
{{install}}
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
  version: '{{version}}',
  install,
{{list}}
};
`;

delete Components.font;

let ComponentNames = Object.keys(Components);

let includeComponentTemplate = [];
let installTemplate = [];
let listTemplate = [];

ComponentNames.forEach(name => {
  let componentName = uppercamelcase(name);

  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );
  installTemplate.push(
    render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    })
  );
  listTemplate.push(`  ${componentName}`);
});

let template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
