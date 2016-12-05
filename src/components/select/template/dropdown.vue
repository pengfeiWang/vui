<template>
  <div
    class="el-select-dropdown"
    :class="{ 'is-multiple': $parent.multiple }"
    :style="{ width: minWidth }">
    <slot></slot>
  </div>
</template>
<script src="../js/dropdown"></script>