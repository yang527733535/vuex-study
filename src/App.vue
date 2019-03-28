<template>
  <div>
    <p>click {{$store.state.count}} times,count is {{evenorodd}} </p>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click="incrementifodd">increment if odd </button>
    <button @click='incrementasync'>increment async </button>
  </div>
</template>

<script>

export default {
 
 methods:{
increment(){
  //  const count = this.count 
    //  this.count = count +1
    //通知vuex去增加 
    this.$store.dispatch('increment') //分发消息 触发对应的action调用
},
decrement(){
      this.$store.dispatch('decrement')
},
incrementifodd(){
  
   this.$store.dispatch('incrementifodd')
},
incrementasync(){
     
  this.$store.dispatch('incrementasync')

}
  },

  computed:{
    evenorodd(){
      return this.$store.getters.evenorodd
    }
  }
}
</script>

<style>

</style>
