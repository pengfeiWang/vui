<template>
<label :class="wrapClasses" ref="rt">
  <span :class="ckClasses" :style="style">
    <span :class="prefixCls + '-inner'"></span>
    <input
      type="checkbox"
      :value="value"
      :class="prefixCls + '-input'"
      :disabled="cpDisabled"
      :checked="defaultChecked"
      :name="name"
      v-model="checked"
      @change="handleChange" />
  </span><span v-if="$slots.default || cpLabel">
    <slot></slot>
    <template v-if="!$slots.default">{{cpLabel}}</template>
  </span>
</label>
<!-- 
      :data-index="index"
      :true-label="trueLabel"
      :false-label="falseLabel"
      :disabled="cpDisabled"
      :defaultChecked="!!defaultChecked"
 -->
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<script src="../js/checkbox"></script>