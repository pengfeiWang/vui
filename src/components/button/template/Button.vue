<template>
<button 
  :type="htmlType || 'button'" 
  :class="btClasses"  
  :disabled="isDisabled"
  @click="handleClick"
  ref="rt"
  >
  <v-icon 
    v-if="isIcon" 
    :type="isIcon"></v-icon>

  <slot v-if="!shape"></slot>
</button>
</template>
<style lang='scss' >
@import '../style/_index.scss';
</style>
<script src="../js/button.js"></script>
