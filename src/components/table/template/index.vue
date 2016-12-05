<template>
  <div :class="
    tableClasses">

    <div class="mioss-table-content">
      <div class="mioss-table-body">
        
        <table class="">
          <colgroup>
            <col v-if="rowSelection" />
            <col v-for="it in columns" :width="it.width" />
          </colgroup>
          <table-head 
            :checked="checkAll"
            :indeterminate="isIndeterminate"
            :default-checked="false" 
            :row-selection="rowSelection" 
            :columns="columns" 
            :on-change="handleChange" />
            <tbody class="mioss-table-tbody">  
            <!-- <transition-group name="list" tag="tbody" class="mioss-table-tbody"> -->
            <tr class="mioss-table-row mioss-table-row-level-0"
              :key="'a' + sIdx + '-' + Math.random().toString(36).replace('0.','')"
              v-for="(it, sIdx) in dataSource"
            >
              <td 
                v-if="rowSelection" 
                :class=" prefixCls + '-table-selection-column'"
              ><v-checkbox
                  type="checkbox"
                  :default-checked="checkAll || !!selectCache[sIdx]"
                  :on-change="handleChange.bind(null,sIdx)" 
                />
              </td>
              <td 
                :key="sIdx +'-'+ idx +'-actions'"
                v-for="(tdIt, idx) in columns"
                v-if="tdIt.actions" 
                :class="tdIt.actions ? prefixCls+'-table-actions' : ''"
              ><v-button 
                  size="small"
                  :icon="acIt.icon"
                  @click="handleAction(sIdx, acIt.action)"
                  v-for="(acIt, acIdx) in tdIt.actions"
                >{{acIt.label}}</v-button> 
              </td>
              <td v-else>
                <template v-if="tdIt.type && tdIt.type == 'img'">
                  <img :src="renderColsText(sIdx, idx)" alt="">
                </template>
                <template v-else>
                  <template v-if="tdIt.handle && typeof tdIt.handle === 'function'">
                    {{tdIt.handle(it[tdIt.prop])}}
                  </template>
                  <template v-else>{{ it[tdIt.prop] }}</template>
                
                </template>
              </td>
            </tr>
            <!-- </transition-group> -->
            </tbody>
        </table>
      </div>
    </div>  

  </div>
</template>
<style lang='scss' scope>
@import '../style/_index.scss';
</style>
<script src="../js/"></script>