const app = Vue.createApp({

})

app.component("button-counter", {
  template: `<button @click="count++">{{ count }} クリック</button>`,
  data(){
    return {
      count:0
    }
  },
})

const vm = app.mount("#app") 



