<template>
  <div style="padding:40px ;">

         <h4>栅格</h4>

          <div class="demo-col mioss-row-flex mioss-row-flex-justify-space-around mioss-row-flex-align-middle"><div class="mioss-col-4"><p class="height-100">col-4</p></div><div class="mioss-col-4"><p class="height-50">col-4</p></div><div class="mioss-col-4"><p class="height-120">col-4</p></div><div class="mioss-col-4"><p class="height-80">col-4</p></div></div>


          <v-row type="flex" justify="start" class="demo-col">
            <v-col type="flex" span="6">.col-6</v-col>
            <v-col span="6">.col-6</v-col>
            <v-col span="6">.col-6</v-col>
            <v-col span="6">.col-6</v-col>
          </v-row>
          <v-row type="flex" justify="start" class="demo-col">
            <v-col type="flex" span="4">.col-4</v-col>
            <v-col span="4">.col-4</v-col>
            <v-col span="4">.col-4</v-col>
          </v-row>
          <v-row type="flex" justify="start" class="demo-col">
            <v-col type="flex" span="8">.col-8 1</v-col>
            <v-col span="8">.col-8 2</v-col>
            <v-col span="8">.col-8 3</v-col>
          </v-row>
          <v-row type="flex" justify="end" class="demo-col">
            <v-col type="flex" span="8" order="3">.col-8 1 倒序</v-col>
            <v-col span="8" order="2">.col-8 2 倒序</v-col>
            <v-col span="8">.col-8 3 倒序</v-col>
          </v-row>
          <h4>字体图标</h4>
          <v-row>
            <v-col span="4">
              <v-icon type="step-forward" />
              <v-icon type="loading" :spin="true" />
            </v-col>        
          </v-row>


    <h4>按钮</h4>  
      <v-button type="primary">主按钮</v-button>
      <v-button>次按钮</v-button>
      <v-button type="ghost">幽灵按钮</v-button>
      <v-button type="dashed">虚线按钮</v-button>
          
    <h4>按钮尺寸</h4>
        <v-button type="primary" size="large">主按钮</v-button>
        <v-button type="primary">次按钮</v-button>
        <v-button type="primary" size="small">小按钮</v-button>

    <h4>按钮形状</h4>
      <v-button type="primary" shape="circle" size="large" icon="search">
      </v-button>
      <v-button type="primary" shape="circle" icon="search">
      </v-button>
      <v-button type="primary" shape="circle" size="small" icon="search">
      </v-button>
      <br />
      <v-button type="ghost" shape="circle-outline" size="large" icon="search">
      </v-button>
      <v-button type="ghost" shape="circle-outline" icon="search">
      </v-button>
      <v-button type="ghost" shape="circle-outline" size="small" icon="search">
      </v-button>   

    <h4>基本组合</h4>
      <v-button-group>
        <v-button type="primary">确定</v-button>
        <v-button type="">取消</v-button>
      </v-button-group>
      <v-button-group>
        <v-button>左</v-button>
        <v-button>中</v-button>
        <v-button>右</v-button>
      </v-button-group>
      <v-button-group>
        <v-button type="primary">左</v-button>
        <v-button type="ghost">中</v-button>
        <v-button type="ghost">中</v-button>
        <v-button>右</v-button>
      </v-button-group>
      <h4>带图标按钮组合 </h4>
      <v-button-group>
        <v-button type="primary">
          <v-icon type="left" />
          <span>后退</span>
        </v-button>
        <v-button type="primary">
          前进
          <v-icon type="right" />
        </v-button>
      </v-button-group>
      <v-button-group>
        <v-button type="primary">
          <v-icon type="cloud"></v-icon>
        </v-button>
        <v-button type="primary">
          <v-icon type="cloud-download"></v-icon>
        </v-button>
      </v-button-group>
      
      <h4>多个组合</h4>
      <v-button-group>
        <v-button type="ghost">1</v-button>
        <v-button type="ghost">2</v-button>
        <v-button type="ghost">3</v-button>
        <v-button type="ghost">4</v-button>
        <v-button type="ghost" icon="right">
          <span>前进</span>
          <!-- <v-icon type="right"></v-icon> -->
        </v-button>
      </v-button-group>
      
      <h4>按钮加载状态</h4>
          <v-button type="ghost" :loading="true"></v-button>
          <v-button type="primary" :loading="true">形状</v-button>
          <v-button type="primary" shape="circle" :loading="true"></v-button>
          <v-button type="primary" disabled :loading="true"></v-button>
          <v-button type="primary" :loading="true"></v-button>
          <v-button type="primary" >按钮</v-button>
          
          <v-button type="primary" size="large" shape="circle" :loading="true"></v-button>
          <v-button type="primary" shape="circle" :loading="true"></v-button>
          <v-button type="primary" size="small" shape="circle" :loading="true"></v-button>

      <h4>复选框</h4>
        <p>默认</p>
        <v-checkbox 
          :default-checked="true" 
          label="提示1212"
          true-label="true label"
          false-label="false label"
          >
        </v-checkbox>
      <p>不可用</p>
        <p>disabled="0" 字符串0
        </p>:disabled="0" 数字0
        </p>真值 禁用</p>
        <v-checkbox :checked="false" :disabled="!0"  value="1212" ></v-checkbox>


        
          <p>
          <p>asdad</p>
            <v-checkbox 
              :default-checked="checkAll" 
              :indeterminate="indeterminate" 
              :disabled="checkboxIsOpen" 
              true-label="反选" 
              false-label="全选"
              @change="checkAllChange" >
              <span>asdad</span>
              </v-checkbox>
          </p>

          <h4>测试</h4>
          <v-checkbox-group 
            :items="ops" 
            @change="checkItemChange"
            ></v-checkbox-group>
            
           <h4>测试2</h4>
          <v-checkbox-group 
            :items="ops2" 
            @change="checkItemChange2"
            ></v-checkbox-group> 
        <!--  <v-checkbox-group 
            :items="ops" 
            @change="checkItemChange"
            :default-checked="checkAll" 
            ></v-checkbox-group> -->
             
    <h4>输入框</h4>
      <v-input @input="inputHandle" />
    <h5>auto size</h5>
      <v-input  :autosize="true" style="width:130px; color:#000" />
    <h4> textarea </h4>
    <v-input type="textarea" :autosize="{minRows:1, maxRows:5}" />
    <h4>密码</h4>  
    <v-input type="password" />



          <h4>单选框</h4>
          <h5>普通</h5>
          <v-radio value="1">选1</v-radio>
          <v-radio value="2">选2</v-radio>
          
          <h5>互斥的分组</h5>
          <v-radio-group 
            :radios="[{label:'选项1', value:1}, {label: '选项2', value:2}]" 
            :default-value="2" ></v-radio-group>


          <h5>单选按钮</h5>
          <v-radio-group 
            type="button" size="large" :radios="[
              {label:'选项1', value:1},
              {label: '选项2', value:2}
            ]" 
            :default-value="2"
            @change="radioChange"
          ></v-radio-group>
          



          <h4>选择框 <span style="color:red">有问题, 待完善</span></h4>
         
          
          <p>==================</p>

          <h4>基本</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            @change="filterChange"
          ></v-select>

          <h4>基本---传递默认值</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]"
            :disabled="true"
            size="large"
            :default-value="3"
            @change="filterChange"
          ></v-select>

          <h4>多选</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            multiple
            @change="filterChange"
          ></v-select>


          <h4>多选---传递默认值</h4>
          <p style="font-size:12px; color:#999">
            多选默认值参数必须是数组
          </p>
          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            multiple
            :default-value="[2,5]"
            @change="filterChange"
          ></v-select>
          
          <h4>筛选</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            filter
            @change="filterChange"
          ></v-select>
          

          <h4>筛选--多选</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            filter
            multiple
            @change="filterChange"
          ></v-select>
          
          <h4>筛选--多选--传递默认值</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            filter
            multiple
            :default-value="[1,2,3]"
            @change="filterChange"
          ></v-select>


          <h4>创建, 筛选, 单选</h4>
          <p>创建默认开启筛选</p>
          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            create
            @change="filterChange"
          ></v-select>

          <h4>创建, 筛选, 多选</h4>

          <v-select 
            :selects="[
              {lll:'选项1', vvv:1}, 
              {lll: '选项2', vvv:2},
              {lll:'什么什么', vvv:3},
              {lll:'还是说', vvv:4},
              {lll:'什么什么', vvv:5}
            ]" 
            key-label="lll"
            key-value="vvv"
            size="large"
            create
            multiple
            @change="filterChange"
          ></v-select>
          

     

          <h4>创建, 筛选, 多选, 标签形式</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            filter
            create
            multiple
            tags
            @change="filterChange"
          ></v-select>

          <h4>隐藏选中的项</h4>

          <v-select 
            :selects="[
              {label:'选项1', value:1}, 
              {label: '选项2', value:2},
              {label:'什么什么', value:3},
              {label:'还是说', value:4},
              {label:'什么什么', value:5}
            ]" 
            size="large"
            filter
            create
            multiple
            hide-selected-item
            @change="filterChange"
          ></v-select>
          <h5>消息提示</h5>

          <v-button  @click.native="open">打开消息提示</v-button>
          <v-button  @click.native="open1">打开成功消息提示</v-button>
          <v-button  @click.native="open2">打开警告消息提示</v-button>
          <v-button  @click.native="open3">打开错误消息提示</v-button>

          <h5>模态窗</h5>
          <v-button  @click.native="open4">Modal</v-button>
          <v-button  @click.native="open5">Modal CallBack</v-button>
          <h5>穿梭窗</h5>
          <v-button  @click="open6">穿梭窗</v-button>
      

      
      <h4> tooltip </h4>

      <v-tip
        style="margin-left:100px;"
        class="item"
        content="left-top 提示文字" 
        placement="left-start">
        <span style="padding:25px;">上2左</span>
        ></v-tip>

      <div class="tip-box" style="position: relative; width: 50%; height: 400px; left: 10%; right: 10%">
        <div style="position: absolute; left: 80px; right: 80px; top:0">
          <v-tip 
            style="position: absolute; top:0; left:0"
            class="item"
            content="Top Left 提示文字" 
            placement="top-start">
            <span class="tip-test">上左</span>
          </v-tip>

          <v-tip
            style="position: absolute; top:0; left:50%; transform: translateX(-50%)"
            class="item" 
            effect="dark" 
            content="Top  提示文字" 
            placement="top">
            <span class="tip-test">上左</span>
            ></v-tip>

          <v-tip
            style="position: absolute; top:0; right:0"
            class="item" 
            effect="dark" 
            content="Top right 提示文字" 
            placement="top-end">
            <span class="tip-test">上左</span>
            ></v-tip>          
        </div>

        <div style="width: 70px; position: absolute; left:0; top:44px; bottom:44px">
           
          <v-tip
            style="position: absolute; top:50%; left:0; transform: translateY(-50%)"
            class="item" 
            effect="dark" 
            content="left 提示文字" 
            placement="left">
            <span class="tip-test">上左</span>
            ></v-tip>

          <v-tip
            style="position: absolute; bottom:0; left:0"
            class="item" 
            effect="dark" 
            content="left bottom 提示文字" 
            placement="left-end">
            <span class="tip-test">上左</span>
            ></v-tip>         
        </div>


      </div>
  </div>
</template>
<style>
.tip-test{
  background-color: #ddd;
  padding: 10px;
}
  h4{
    padding-top: 20px;
    padding-bottom: 20px;

  }
  .demo-col {
    padding: 10px 0;
  }
  .demo-col > *{
    padding: 20px;
    color: #fff;
    background: #2db7f5;
  }
  .demo-col > *:nth-child(2n){
    background-color: rgba(45, 183, 245, 0.68);
  }
/*.page, html, body, #vm-root{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:#ccc;
  
}
.page .content-controller{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
}*/
</style>
<script>
import extend from 'extend';

function setCheckboxGroup (o) {
  if ((o || this.ops).every(item => item.checked)) {
    this.indeterminate = true;
    this.checkAll = true;
  } else {
    if ((o || this.ops).some(item => item.checked)) {
      this.indeterminate = true;
    } else {
      this.indeterminate = false;
    }
    this.checkAll = false;
  }
}
function setCheckboxGroupChecked (status, idx, o) {
  var that = this;
  if (idx !== undefined) {
    // ;
    (o || this.ops).splice(idx, extend((o || this.ops)[idx], {'checked': status}));
  } else {
    (o || this.ops).map((item, index) => {
      extend((o || that.ops)[index], {'checked': status});
      (o || that.ops).splice(index, {'checked': status});
    });
  }
}
export default {
  data () {
    return {
      testDefault: [],
      emptyarr: [],
      options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',

      checkboxBtnDisabled: false,
      isShow: true,
      msg: '当前页: demo',
      loading: false,
      checked: true,
      indeterminate: false,
      checkboxIsOpen: false,
      selectOps: [
        {
          value: 1,
          label: 'luck'
        },
        {
          value: 2,
          label: 'jack',
          disabled: true
        },
        {
          value: 3,
          label: 'tom2222'
        },
        {
          value: 4,
          label: 'tom23333332'
        },
        {
          value: 5,
          label: 'tom24444'
        }
      ],
      selectOpsDefault: 1,
      ops: [
        {
          label: '提示文字',
          value: 1
        },
        {
          label: '提示文字2',
          value: 2
        }
      ],
      ops2Val: 1,
      ops2: [
        {
          label: '提示文字',
          value: 1
        },
        {
          label: '提示文字2',
          value: 2
        }
      ],
      ops3: [
        {
          label: '提示文字',
          value: 1
        },
        {
          label: '提示文字111222',
          value: 313

        },
        {
          label: '提示文字23131',
          value: 2
        }
      ],
      ops3Dv: 313,
      checkAll: false,
      inputVal1: 11,
      inputVal2: 11
    };
  },
  events: {
  },
  watch: {
  },
  methods: {
    defaultSelectHandle (ags) {
      console.log(ags);
    },
    filterChange (ags) {
      console.log(ags);
    },
    inputHand2 (ags) {
      console.log(ags);
    },
    checkAllChange (ags) {
      this.checkAll = ags.checked;
      setCheckboxGroupChecked.call(this, ags.checked);
      setCheckboxGroup.call(this);
    },
    checkItemChange (ags) {
      console.log(ags);
      
      setCheckboxGroupChecked.call(this, ags.checked, ags.index);
      setCheckboxGroup.call(this);
      // console.log(this.ops);
      // this.$nextTick(() => {
      //   this.ops.splice(ags.index, extend(this.ops[ags.index], {'checked': ags.checked}));
      // });
    },

    checkItemChange2 (ags) {
      console.log(ags);
      // console.log(this.ops2);
      setCheckboxGroupChecked.call(this, ags.checked, ags.index, this.ops2);
      setCheckboxGroup.call(this, this.ops2);
    },
    radioChange (ags) {
      console.log(ags);
    },
    checkboxBtnCkick () {
      var that = this;
      this.checkboxIsOpen = !this.checkboxIsOpen;
      this.ops.map((item, index) => {
        extend(that.ops[index], {'disabled': that.checkboxIsOpen});
        that.ops.splice(index, {'disabled': that.checkboxIsOpen});
      });
    },
    radioGroup (ags) {
      let {label, value} = ags;
      console.log('label: ', label, 'value: ', value);
    },
    open () {
      this.$message('这是一条消息提示');
    },
    open1 () {
      this.$message({
        message: '这是一条消息提示',
        type: 'success'
      });
    },
    open2 () {
      this.$message({
        message: '这是一条消息提示',
        type: 'warning'
      });
    },
    open3 () {
      console.log(this.$transfer);
      this.$message({
        message: '这是一条消息提示',
        type: 'error'
      });
    },
    open4 () {
      this.$modal({
        message: '消息'
      });
    },
    open5 () {
      this.$modal({
        showCancelButton: true,
        message: '回调'
      })
      .then((ags) => {
        console.log(ags);
      })
      .catch((ags) => {
        console.log(ags);
      });
    },
    open6 () {
      this.$modal({
        title: '穿梭窗',
        dataSource: [
          {
            id: 3,
            label: '第3行'
          },
          {
            id: 2,
            label: '第二行'
          }
        ],
        dataTarget: [
          {
            id: 1,
            label: '第一行'
          },
          {
            id: 2,
            label: '第二行'
          }
        ],
        keyWord: 'id',
        transfer: true,
        showCancelButton: true,
        message: '穿梭--'
      })
      .then((ags) => {
        var [msgInstance, action] = ags;
      })
      .catch((ags) => {
        console.log(ags);
      });
    },
    inputHandle (ags) {
      console.log(ags);
    }
  },
  // components: {
  //   vButton
  // },
  created () {
    console.log('demo create');
  },
  mounted () {
    window.demo = this;
    console.log('demo mounted');
  }
};

</script>