<template>
  <transition name="msgbox-fade">
  <div v-if="value" style="position: fixed;top:0;left:0;right:0;bottom:0;width: 100%;height: 100%; z-index:9999">
    <div :class="[prefixCls + '-modal-mask']" v-if="modal"></div>
    <div :class="[prefixCls + '-modal-wrap']" >
      <div  :class="[prefixCls + '-modal']" :style="vstyle">
        <div :class="[prefixCls + '-modal-content']">
          <button :class="[prefixCls + '-modal-close']" @click="handleAction('cancel')" >
            <span :class="[prefixCls + '-modal-close-x']"></span>
          </button>
          <div :class="[prefixCls + '-modal-header']" v-if="!!title">
            <div :class="[prefixCls + '-modal-title']">{{title}}</div>
          </div>
          <div :class="[prefixCls + '-modal-body']">
            
            <slot></slot>

            
          </div>
          <div :class="[prefixCls + '-modal-footer']">

            <v-button v-if="isShowCancel"
              size="large"
              @click="handleAction('cancel')"
            >
              <span>取消</span>
            </v-button>
            
            <v-button 
              type="primary" 
              size="large"
              :loading="btnLoading"
              @click="handleAction('confirm')"
            >

              <span>确认</span>
            </v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<style>

.msgbox-fade-enter-active{animation:msgbox-fade-in .3s}
.msgbox-fade-leave-active{animation:msgbox-fade-out .3s}
@keyframes msgbox-fade-in{0%{transform:translate3d(0,-20px,0);opacity:0}to{transform:translateZ(0);opacity:1}}
@keyframes msgbox-fade-out{0%{transform:translateZ(0);opacity:1}to{transform:translate3d(0,-20px,0);opacity:0}}

  .v-modal{
    position:fixed;
    left:0;top:0;width:100%;
    height:100%;
    opacity:.5;
    background:#000
  }
</style>
<script src="../js/"></script>


