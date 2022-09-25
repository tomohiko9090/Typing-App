export default {
  // 3.countという変数を定義し0を入れる
  data() {
    return {
      count: 0,
    }
  },

  // 4.labelという変数を使用できるようにする
  props: {
    label: String,
  },

  // 5.doVoteというメソッドがあることを認識
  // 8.メソッドが呼ばれカウント。$emitメソッドでイベント発行、更新された引数を親コンポーネントに渡す
  methods: {
    doVote() {
      this.count++
      this.$emit('get-vote', this.label, this.count)
    }
  },

  // 6.以下のhtmlを反映させる
  template: `
    <button @click="doVote">{{ label }} {{ count }}</button>
  `
}