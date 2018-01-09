var Components = require('../components.json');
var fs = require('fs');
var render = require('json-templater/string');
// var uppercamelcase = require('uppercamelcase');
var path = require('path');

// var npm_config_argv_json = JSON.parse(process.env.npm_config_argv);
// console.log(npm_config_argv_json);

var OUTPUT_PATH = path.join(__dirname, '../index.js');
var importCss = 'import \'./src/components/style/index.scss\';';
var IMPORT_TEMPLATE = 'import \{ {{name}} \} from \'{{package}}/index.js\';';
var INSTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});';
var MAIN_TEMPLATE = `/*  */

{{include}}

const install = function (Vue, opts = {}) {

  if (install.installed) {
    return;
  }

{{install}}


  Vue.prototype.$modal = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
  Vue.prototype.$message = Message;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
{{list}}
};
`;

// delete Components.font;

// var ComponentNames = Object.keys(Components);
// console.log(ComponentNames);
var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

includeComponentTemplate.push(render(importCss));

for (let name in Components) {
  var componentName = name;//uppercamelcase(name);
  var componentPath = Components[name];
  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: componentPath
  }));

  if (['Modal', 'Message'].indexOf(componentName) === -1) {
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
}


// Components.forEach((name, path) => {

// });

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

