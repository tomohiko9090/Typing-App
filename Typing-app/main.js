import StopWatch from './StopWatch.js'

let width
let color

const app = Vue.createApp({

  components: {
    StopWatch
  },

  data(){
    return {
      startFlg: "",
      current_question: "",
      questions:[
        "Motivation Cloud series",
        "Labo Communication Cloud",
        "i-Company CLUB",
        "Motivation Index score",
        "Customer Reliability Engineering",
        "Process Design",
        "Product Management",
        "Site Reliability Engineering",
        "Weekly Active Users",
        "Team Engagement Plan",
      ],
      typeBox: "",
      current_question_counts: 0,
      question_counts: 0
    }
  },

  computed:{
    styleObject:function(){
      width = 10 * this.current_question_counts + "%"
      if(this.current_question_counts == 10){
        color = "#03a9f4"
      }else{
        color = "orange"
      }
      return{
        "width":width,
        "background-color": color
      }
    }
  },

  methods:{
    gameStart:function(){
      this.startFlg = true;
      // カーソルをinputにフォーカスする
      this.$nextTick(function(){
        document.getElementById("typeForm").focus()
      })
    }
  },

  // 描画されたタイミングで実行される
  mounted:function(){
    this.current_question = this.questions[0]
    this.question_counts = this.questions.length
  },

  // データが切り替わる度に動作する
  watch:{
    typeBox:function(e){
      if(e == this.current_question){
        this.questions.splice(0, 1) //配列一つ目を消去
        this.current_question = this.questions[0]
        this.typeBox = ""
        this.current_question_counts = this.current_question_counts + 1 // 回答した数が増える
      }
    }
  }
})

const vm = app.mount("#app")