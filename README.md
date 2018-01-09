# v2ui

>Vue2.0 component package for Web.




## start



```javascript
import Vue from 'vue';
// 下载v2ui, 不能通过npm安装, 需要手动下载, 因某些原因不能发布到npm
// 指定路径, 通常都在 dist 中  v2ui.common || v2ui.min ||  v2ui
import * as v2ui from 'v2ui/dist/v2ui.common';
Vue.use(v2ui);
new Vue({
  el: '#root'
});
```

or

```javascript
import Vue from 'vue';
import {vButton} from 'v2ui/dist/button';
Vue.use(vButton);
new Vue({
  el: '#root'
})
```

or

```javascript
import Vue from 'vue';
import {vButton} from 'v2ui/dist/button';
new Vue({
  el: '#root',
  components: {
    vButton
  }
})
```

or  browser 

```html
<script src="vue.js"></sript>
<!--浏览器端引入默认自动全局注册-->
<script src="v2ui.js"></sript>
<script>
new Vue({
el: '#root'
});
</script>
```

html

```html
<div id="root">
    <v-button>button</v-button>
</div>

```

## 目录说明

* preview 预览文件夹, `npm run dev` 运行时所使用的文件

* src

* docs 文档文件夹 运行命令 `gitbook serve`, 详细说明需要查看 `gitbook` 官方提供文档

## 开发

* 运行命令 查看 `package.json` 文件中 `scripts` 部分
