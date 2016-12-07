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
      <v-button type="ghost" className="disabled">幽灵按钮</v-button>
      <v-button type="dashed">虚线按钮</v-button>
          
    <h4>按钮尺寸</h4>
        <v-button type="primary" size="large">主按钮</v-button>
        <v-button>次按钮---<span>后退</span></v-button>
        <v-button size="small">小按钮</v-button>
        <v-button type="ghost">幽灵按钮</v-button>
        <v-button type="dashed">虚线按钮</v-button>

    <h4>按钮形状</h4>
      <v-button type="primary" shape="circle" size="large" icon="search">
      </v-button>
      <v-button type="primary" shape="circle">
        <v-icon type="search" />
      </v-button>
      <v-button type="primary" shape="circle" size="small">
        <v-icon type="search" />
      </v-button>
      <br />
      <v-button type="ghost" shape="circle-outline" size="large">
        <v-icon type="search" />
      </v-button>
      <v-button type="ghost" shape="circle-outline">
        <v-icon type="search" />
      </v-button>
      <v-button type="ghost" shape="circle-outline" size="small">
        <v-icon type="search" />
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


      <h4>复选框</h4>
        <p>默认</p>
        <v-checkbox 
          :checked="true" 
          label="提示1212"
          true-label="true label"
          false-label="false label"
          >
        </v-checkbox>
      <p>不可用</p>
        <p>disabled="0" 字符串0
        </p>:disabled="0" 数字0
        </p>真值 禁用</p>
        <v-checkbox :checked="false" :disabled="!0"  value="1212" />        
    <h4>输入框</h4>
      <v-input  />
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
          <h5>分组</h5>
          <v-radio-group :radios="[{label:'选项1', value:1}, {label: '选项2', value:2}]" :default-value="2" ></v-radio-group>
          <h5>单选按钮 大小</h5>
          <v-radio-group 
            type="button" size="large" :radios="[{label:'选项1', value:1}, {label: '选项2', value:2}]" 
            :default-value="2"
          ></v-radio-group>
          
          <p style="line-height:.5">&nbsp;</p>
          
          <v-radio-group 
            type="button"  :radios="[{label:'选项1', value:1}, {label: '选项2', value:2}]"
          ></v-radio-group>
          



          <h4>选择框 <span style="color:red">有问题, 待完善</span></h4>
          <h5>default</h5>
          <v-select 
            :selects="[{label:'选项1', value:1}, {label: '选项2', value:2}]"
            :default-value="1" style="width:200px;"
          />
      
          <h4>large</h4>
          <v-select 
            :selects="[{label:'选项1', value:1}, {label: '选项2', value:2}]" 
            size="large"
            disabled
          />
          <h4>small</h4>
          <v-select 
            :selects="[{label:'选项11', value:1}, {label: '选项22', value:2}]" 
            size="small"
          />    
  </div>
</template>
<style>
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
export default {
};

</script>