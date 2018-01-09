<template>
  <span class="mioss-input-wrapper" ref="rt">
    <template v-if="(type=='textarea' || autosize) && !/password/.test(type)">
      <textarea 
        ref="input"
        :name="name"
        :style="textareaStyles"
        :placeholder="placeholder" 
        :class="classes"
        :readonly="readonly"
        v-model="cPvalue"
        :value="cPvalue"
        el:input
        @input="handleTextareaChange"
        @keyup.enter="handleEnter"
        @keyup.delete="handleDelete"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
    <template v-else>    
      <template v-if="type=='password'">
        <input 
          ref="input"
          type="password"
          :style="style"
          :name="name"
          :placeholder="placeholder" 
          :class="classes"
          v-model="cPvalue"
          :value="cPvalue"
          el:input
          @input="handleInputChange"
          @keyup.enter="handleEnter"
          @keyup.delete="handleDelete"
          @focus="handleFocus"
          @blur="handleBlur"
        >       
      </template>
      <template v-else>
        <template v-if="type==='number'">
          <input 
            ref="input"
            type="number"
            :name="name"
            :readonly="readonly"
            :style="style"
            :placeholder="placeholder" 
            :class="classes"
            v-model="cPvalue"
            :value="cPvalue"
            el:input
            :max="max"
            :min="min"
            @input="handleInputChange"
            @keyup.enter="handleEnter"
            @keyup.delete="handleDelete"
            @focus="handleFocus"
            @blur="handleBlur"
          >           
        </template>
        <template v-else>
          <input 
            ref="input"
            type="text"
            :name="name"
            :readonly="readonly"
            :style="style"
            :placeholder="placeholder" 
            :class="classes"
            v-model="cPvalue"
            :value="cPvalue"
            el:input
            @input="handleInputChange"
            @keyup.enter="handleEnter"
            @keyup.delete="handleDelete"
            @focus="handleFocus"
            @blur="handleBlur"
          >           
        </template>
     
      </template>
    </template>
  </span>
</template>
<style lang='scss'>
@import '../style/_index.scss';
</style>
<script src="../js/"></script>

