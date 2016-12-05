<template>
  <div id="mioss-header">
    <v-row 
      type="flex"
      justify="start"
      span="24">

    <v-col
      span="4">
      <span class="title">
        <slot></slot>
      </span>
      
    </v-col>

  </v-row>
  </div>
</template>
<style scoped lang="scss" src="../style/_index.scss">
</style>
<script src="../js/index.js"></script>