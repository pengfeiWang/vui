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
    :type="isIcon" />
  <slot></slot>
</button>
</template>
<style lang='scss' >
@import '../style/_index.scss';
</style>
<script src="../js/button.js"></script>
