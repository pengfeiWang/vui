<template>
<label :class="wrapClasses" ref="rt">
  <span :class="cpClasses">
    <span :class="buttonClasses + '-inner' "></span>
    <input
      :class="buttonClasses + '-input'"
      type="radio"
      :value="value"
      :name="name"
      :disabled="cpDisabled"
      :checked="checked"
      v-model="checked"
      @change="handleChange"
    />
  </span><span v-if="$slots.default || cpLabel || icon">
    <span v-if="icon" :class="isIcon"></span>
    <slot></slot>
    <template v-if="!$slots.default">{{cpLabel}}</template>
  </span>
</label>       
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<script src="../js/radio.js"></script>