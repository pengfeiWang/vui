# v2ui

>Vue2.0 component package for Web.


## install

```
npm install v2ui --save-dev
```

## start



```javascript
import Vue from 'vue';
import * as v2ui from 'v2ui';
Vue.use(v2ui);

new Vue({
  el: '#root'
});
```

or

```javascript
import Vue from 'vue';
import {
  vButton,
  vButtonGroup
} from 'v2ui';

new Vue({
  el: '#root'
  components: {
    vButton,
    vButtonGroup  
  }
})
```

html

```html
<div id="root">
    <v-button>button</v-button>
</div>

```
