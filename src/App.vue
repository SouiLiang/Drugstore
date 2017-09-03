<template>
  <div id="app">  
  <mt-button
       type="primary"
       @click='showToast'>
       选择操作
     </mt-button>
     <!-- <mt-actionsheet
       cancel-text=""
       :actions="actions"
       :visible.sync="sheetVisible">
     </mt-actionsheet>   -->
    <router-view></router-view>
    
  </div>

</template>

<script>
import { Toast } from 'mint-ui';
export default {

  data() {
        return {
          sheetVisible: false,
          actions: [{
            name: '展示 Toast',
            method: this.showToast
          }, {
            name: '展示 Message Box',
            method: this.showMsgbox
          }]
        };
      },
  methods: {
        showToast() {
          alert("aaaa");
          Toast('这是一个 Toast');
        },

        showMsgbox() {
          MessageBox('提示', '这是一个 Message Box');
        }
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
  width: 100%;
}
</style>
