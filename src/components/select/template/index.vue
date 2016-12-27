<template>
  <div 
    :class="wrapClasses"
    :style="{width: width}" ref="reference" v-clickoutside="handleClose">
    <div
      :class="selectionClasses"
      @click="handleFocus"
       >
      <div 
        ref="rendered" 
        :class="prefixCls + '-select-selection__rendered'" 
        :style="{height: renderedHeight}">

        <span :class="[
          'select-result',
          {
            'placeholder': isPlaceholder,
            'select-result-notags': !isTags
          },
          prefixCls + '-select-selection-selected-value'
        ]">
          <template v-if="isTags">
            <span 
              :class="[
                'tags',
                {
                  'tags-active': tagsIndex === tagsIdx
                }
              ]"
              @click="tagsDelete(tagsIt, tagsIdx)"
              v-for="(tagsIt, tagsIdx) in tagsList">{{tagsIt[keyLabel]}}
              <i :class="prefixCls + '-icon ' +  prefixCls + '-icon-close'  "></i>
            </span>
            <input 
              ref="input"
              class="input"
              v-if="isTags && (create || filter)"
              :style="{'width': cpInputWidth}"
              :placeholder="currentPlaceholder"
              :readonly="!isInput"
              v-model="value" 
              @input="handleInputChange"
              @keydown.down.prevent="navigateOptions('next')"
              @keydown.up.prevent="navigateOptions('prev')"
              @keydown.left.prevent="navigateOptions('left')"
              @keydown.right.prevent="navigateOptions('right')"
              @keydown.delete="deleteEvent"
              @keydown.enter.prevent="handleEnter"
              @keydown.esc="handleEsc"
              @blur="handleBlur"
            />
          </template>
          <template v-else >
            {{nodeTagsLabel}}
          </template>
          <span v-if="filter" ref="search__field__mirror" :class="prefixCls + '-select-search__field__mirror'">{{value ? value : currentPlaceholder}}</span>
        </span>
 
      </div> 
      <span :class="prefixCls + '-select-arrow'">
        <b></b>
      </span>  
      <transition name="zoom-in-top" @after-leave="doDestroy">
        <select-menu
          :on-update-popper="updatePopper"
          :on-destroy-popper="destroyPopper"
          :class="selectionDropdownClasses"
          ref="popper" 
          v-show="isOpen">
          <ul 
            :class="[
              prefixCls + '-select-dropdown-menu',
              prefixCls + '-select-dropdown-menu-vertical',
              prefixCls + '-select-dropdown-menu-root'
            ]"
            ref="itembox"          
          >
            
            <li
              :class="[
                defaultSelectItem(it[keyValue]),
                prefixCls + '-select-dropdown-menu-item',
                {
                  [`${prefixCls}-select-dropdown-menu-item-active`]: index === keyIndex,
                  [`${prefixCls}-select-dropdown-menu-item-none`]: hideSelected(it, index),
                  [`${prefixCls}-select-dropdown-menu-item-disabled`]: it.disabled
                }
              ]"
              :data-key="keyIndex"
              :data-idx="index"
              ref="select_item"
              v-for="(it, index) in selects"
              :disabled="it.disabled"
              v-show="queryItem(it[keyLabel])"
              @click="selectItem(it, index, $event)"
              @mouseenter="hoverItem(index, $event)"
              @mouseleave="leaveItem(index, $event)"
            >{{it[keyLabel]}}</li>
            <li
              ref="create_select_item"
              :class="[
                prefixCls + '-select-dropdown-menu-item',
                {
                  [`${prefixCls}-select-dropdown-menu-item-active`]: selects.length === keyIndex
                }
              ]"
              @click="selectItem(null, selects.length, $event)"
              @mouseenter="hoverItem(selects.length, $event)"
              @mouseleave="leaveItem(selects.length, $event)"
              v-show="isShowNewLabel"
            >
              {{value}}
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
