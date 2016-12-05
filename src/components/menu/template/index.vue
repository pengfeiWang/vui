<template>
<div>

<!-- mioss-menu-submenu-selected   mioss-menu-submenu-open  -->
<ul :class="rootClasses" >
  <li 
    v-for="(it, idx) in menus"
    :class="[
      menuSubMenuClasses, 
      setMenuSubMenuOpenClasses(it.key)
    ]"
    :data-key="it.key"
    :data-idx="idx"
    
  >
    <div 
      class="mioss-menu-submenu-title"
      style="padding-left: 24px;"
      @click="handleClick(idx, it.key, $event)">
      <span>
        <i :class="iconClasses(idx)" v-if="it.icon"></i>
        <span>{{it.title}}</span>
      </span>
    </div>
    
    <ul 
      :style="setStyle(idx, it.key)"
      class="mioss-menu mioss-menu-inline mioss-menu-sub menu-slide-active">
      <li 
        :class="[`mioss-menu-item`, setMenuSubmenuItemSelectedClasses(idx, it.key, subidx, subit.key)]" style="padding-left: 50px;"
        @click="handleItemClick(idx, subit.key, subidx, $event)"
        v-for="(subit, subidx) in it.item"
      >{{subit.title}}</li>
    </ul>
  </li>
</ul>
</div>  
</template>
<style lang='scss'>
@import '../style/_index.scss'
</style>
<script src="../js/index.js"></script>
