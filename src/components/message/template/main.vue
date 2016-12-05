<template>
  <transition :name="prefixCls + '-message-fade'">
    <div :class="prefixCls + '-message'" 
      v-show="visible" 
      @mouseenter="clearTimer" 
      @mouseleave="startTimer">

      <div :class="[prefixCls + '-message-group', cpClass]">
        <p>
        <v-icon type="check-circle" ></v-icon>
        {{ message }}</p>
        <div v-if="showClose" :class="[prefixCls +'-message-closeBtn', prefixCls + +'-icon-close']" @click="handleClose"></div>
      </div>
    </div>
  </transition>
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<script src="../js/"></script>
