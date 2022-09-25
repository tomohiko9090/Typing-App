import VoteButton from './VoteButton.js'
const app = Vue.createApp({

    components: {
      // 2.VoteButtonコンポーネントを呼び出す
      VoteButton
    },

    created() {
      alert('投票を開始します')
    },

    // 10.sayVoteメソッドが発動し、アラートを出す
    methods: {
    sayVote(label, count) {
      alert(label + ":" + count)
    }
  }
})
const vm = app.mount('#app')