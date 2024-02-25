// 実験1
const app1 = Vue.createApp({
    data() {
    return {
      myName: '葛葉1'
    }
  }
}).mount("#app1")

// 実験2（入力された値が引数になる）
const app2 = Vue.createApp({
  methods:{
    inputEvent(event) {
      console.log(event.target.value); // 入力された値をコンソールに表示
    }
  }
}).mount("#app2")

// 実験3
const app3 = Vue.createApp({
    data() {
    return {
      myName: '葛葉3'
    }
  }
}).mount("#app3")

