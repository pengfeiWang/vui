<template>
  <div 
    :class="wrapClasses"
    :style="style" ref="reference" v-clickoutside="handleClose">
    <div
      :class="selectionClasses"
      @click="hanbleFocus"
       >
        <!-- v-model="selectValue" -->
        <!-- @blur="handleBlur" -->
      <div class="mioss-select-selection__rendered">
        <div class="mioss-select-selection-selected-value">{{selectLabel}}</div>    
      </div> 
      <span class="mioss-select-arrow" unselectable="unselectable">
        <b></b>
      </span>
      <transition name="select-slide" @after-leave="doDestroy">
        <select-menu
          :on-update-popper="updatePopper"
          :on-destroy-popper="destroyPopper"
          :class="selectionDropdownClasses"
          ref="popper" 
          v-show="isOpen">
          <ul class="mioss-select-dropdown-menu mioss-select-dropdown-menu-vertical  
          mioss-select-dropdown-menu-root"
            role="menu" 
          >
            <li 
              @click="itemClick(it, index, $event)"
              :class="[
                defaultSelectItem(it.value), 
                'mioss-select-dropdown-menu-item',
                {
                  [`${prefixCls}-select-dropdown-menu-item-disabled`]: it.disabled
                }
              ]"
              role="menuitem"
              :disabled="it.disabled"
              style="user-select: none"
              v-for="(it, index) in selects"
              :data-value="it.value" >
                {{it.label}}
            </li>
          </ul>
        </select-menu>
      </transition>
    </div>
  </div>  
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<script src="../js/"></script>
