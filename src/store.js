//vuex的核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 //状态对象

 const state={  //初始化状态
   count:0  
 }
 //包含过个更新state函数的对象
 const mutations = {
    //只有两个动作
    //增加的mutation
    zengjia(state){
      state.count++
    },
    jianshao(state){
      state.count--
    }
    //减少的mutation
 }
 //包含多个对应事件回调函数的对象
 const actions ={
   //增加的action
  increment({commit}){
    //提交mutation
    commit('zengjia')
  },

  decrement({commit}){
    //提交mutation
    commit('jianshao')
  },
  incrementifodd({commit,state}){
    //提交mutation
    if(state.count%2==1){
      commit('zengjia')
    }

  },
  incrementasync({commit}){
    //提交mutation
    setTimeout(()=>{
      commit('zengjia')
    },1000)
 
  }
 }
 //包含多个getter计算属性函数的对象
const getters = {
    evenorodd(state){  //不需要调用，只要读取胡思型孩子
       return  state.count%2==0?'偶数':'奇数'
    }
}
export default new Vuex.Store({
    state,  //状态
    mutations, //包含过个更新state函数的对象
    actions, //包含多个对应事件回调函数的对象
    getters,//包含多个getter计算属性函数的对象
}) //是一个构造函数 