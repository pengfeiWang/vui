<template>
  <div :class="groupClasses" ref="gp_rt">
    <v-checkbox v-for="(it, index) in items"
      v-if="isEmptyItem(it)"
      type="checkbox"
      :key="index"
      :index="index"
      :true-label="it.trueLabel"
      :false-label="it.falseLabel"
      :label="it[keyWord]"
      :value="it[keyValue]"
      :disabled="disabled || it.disabled"
      :name="name"
      :default-checked="isChecked(it)"
      @change="handleChange"
    ></v-checkbox>
  </div>
</template>
<script src="../js/checkbox_group"></script>


