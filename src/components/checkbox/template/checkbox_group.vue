<template>
  <div :class="groupClasses" ref="gp_rt">
    <v-checkbox v-for="(it, index) in items"
      v-if="isEmptyItem(it)"
      type="checkbox"
      :key="renderRandom()"
      :index="index"
      :true-label="it.trueLabel"
      :false-label="it.falseLabel"
      :label="it[keyValue]"
      :value="it[keyWord]"
      :disabled="it.disabled"
      :name="name"
      :default-checked="it.defaultChecked"
      @change="handleChange"
    ></v-checkbox>
  </div>
</template>
<script src="../js/checkbox_group"></script>


