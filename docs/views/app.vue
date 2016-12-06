<template>
  <div>
    test
    <v-button>按钮123</v-button>
  </div>
</template>
<style lang='scss'>
@import '../../src/components/style/index.scss';
</style>
<script>
import {vButton} from '../../dist/vui.js';

console.log(vui)
export default {
  // do
  components: {
    vButton
  }
};

</script>