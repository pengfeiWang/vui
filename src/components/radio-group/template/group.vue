<template>
  <div :class="groupWapperClass" ref="group_rt">
    <v-radio v-for="(it, index) in radios"
      :key="index"
      v-if="isEmptyItem(it)"
      :type="type?type:it.type"
      :label="it[keyLabel]"
      :value="it[keyValue]"
      :name="name"
      :disabled="disabled ? disabled : it.disabled"
      :default-checked="(it[keyValue]==value || it.checked)"
      :style="it.style"
      :class="it.class"
      :icon="it.icon"
      @change="handleChange"
    ></v-radio>
  </div>
</template>
<script src="../js/group.js"></script>