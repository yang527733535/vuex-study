
import Vue from 'vue'
import App from './App'
import store from './store'


new Vue({
  el: '#app',
  store , //所有的组件对象都多了一个属性 $store
  components: { App },
  template: '<App/>',
   
})
