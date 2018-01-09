<template>
<transition :name="prefixCls + '-fade'">
  <div v-show="value" style="position: fixed;top:0;left:0;right:0;bottom:0;width: 100%;height: 100%; z-index:9999">
    <!-- 遮罩 -->
    <div :class="[prefixCls + '-modal-mask']" v-if="modal"></div>
    <!-- 上部分弹窗开始 -->
    <div :class="[prefixCls + '-modal-wrap']" >
      <div  :class="[prefixCls + '-modal']" :style="customStyle">
        <div :class="[prefixCls + '-modal-content']">
          <button :class="[prefixCls + '-modal-close']" @click="handleAction('cancel')" >
            <span :class="[prefixCls + '-modal-close-x']"></span>
          </button>
          <div :class="[prefixCls + '-modal-header']" v-if="!!title">
            <div :class="[prefixCls + '-modal-title']">{{title}}</div>
          </div>
          <!-- 上部分弹窗结束 -->
          <div :class="[prefixCls + '-modal-body']">
            <template v-if="transfer">
              <!-- 穿梭窗 -->
              <div class="mioss-transfer">
                <div class="mioss-transfer-list">

                  <div class="mioss-transfer-list-header">
                    <v-checkbox
                      name="left"
                      :default-checked="leftAllChecked"
                      :indeterminate="!toRightButtonDisabled"
                      @change="selectAll"
                    >
                      <span>{{sourceSelectSize}}</span>
                      <span>/</span>
                      <span>{{sourceSize}}</span>
                    </v-checkbox>
                  </div>

                  <div class="mioss-transfer-list-body">
                    <div class="mioss-transfer-list-content">
                        <v-checkbox-group
                          name="left"
                          :items="dataSource"
                          :key-word="keyWord"
                          :key-value="keyValue"
                          @change="selectSingle"
                        >
                        </v-checkbox-group>
                    </div>
                  </div>
                </div>
                  
                <!-- 转移方向 to -->

                <div class="mioss-transfer-operation">
                  <v-button 
                    type="primary" 
                      :disabled="toLeftButtonDisabled"
                      @click="transferDirection('left')"
                      icon="left" size="small"></v-button>
                  <v-button 
                    type="primary" 
                      :disabled="toRightButtonDisabled" 
                      @click="transferDirection('right')"
                      icon="right" size="small"></v-button>
                </div>


                <div class="mioss-transfer-list">

                  <div class="mioss-transfer-list-header">
                    <v-checkbox
                    name="right"
                      :default-checked="rightAllChecked"
                      :indeterminate="!toLeftButtonDisabled"
                      @change="selectAll"
                    >
                      <span>{{targetSelectSize}}</span>
                      <span>/</span>
                      <span>{{targetSize}}</span>
                    </v-checkbox>
                    
                  </div>

                  <div class="mioss-transfer-list-body">
                    <div class="mioss-transfer-list-content">
                        <v-checkbox-group
                          name="right"
                          :items="dataTarget"
                          :key-word="keyWord"
                          :key-value="keyValue"
                          @change="selectSingle"
                        >
                        </v-checkbox-group>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <template v-if="message">
              <div :class="typeClass">
                <span :class="[prefixCls + '-icon']"></span> {{message}}
              </div>
              </template>
              <template v-else><slot></slot></template>
            </template>
          </div>
          <!-- 弹窗下半部开始 -->
          <div :class="[prefixCls + '-modal-footer']">
            <v-button v-if="showCancelButton"
              size="large"
              @click="handleAction('cancel')"
            >
              <span>{{cancelButtonText}}</span>
            </v-button>
            
            <v-button
              type="primary" 
              size="large"
              :loading="isShowbtnLoading"
              @click="handleAction('confirm')"
            >
              <span>{{confirmButtonText}}</span>
            </v-button>
          </div>
          <!-- 弹窗下半部结束 -->
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<style lang='scss'>
@import '../style/_transfer.scss';
@import '../style/_index.scss';
</style>
<script src="../js/"></script>