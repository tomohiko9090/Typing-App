let width
let color

const app = Vue.createApp({

  // データプロパティ
  data(){
    return {
      active : false, // 実行状態
      start : 0, // startを押した時刻
      timer : 0, // setInterval()の格納用
      interval : 0, // 計測時間
      accum : 0, // 累積時間(stopしたとき用)

      startFlg: "",
      current_question: "",
      questions:[
        "Motivation Cloud series", //  
        "Labo Communication Cloud",
        "i-Company CLUB",
        "Motivation Index score",
        "Customer Reliability Engineering",
        "Process Design",
        "Product Management",
        "Site Reliability Engineering",
        "Weekly Active Users",
        "Team Engagement Plan",
        "magellan_summary_result_names",
        "magellan_check_survey_settings",
        "attribute_group_sort_no",
        "allow(Aws::S3::Client).to receive(:new).and_return(s3_client_mock)",
        "overflow-wrap: anywhere;"
      ],
      // questions:[
      //   "1", //  
      //   "2",
      //   "3",
      //   "4",
      //   "5",
      //   "6",
      //   "7",
      //   "8",
      //   "9",
      //   "0",
      // ],
      typeBox: "",
      current_question_counts: 0,
      question_counts: 0,
    }
  },

  // 算出プロパティ
  computed:{
    styleObject:function(){
      width = 10 * this.current_question_counts + "%"
      if(this.current_question_counts == 10){
        color = "#03a9f4"
        this.stopTimer()
      }else{
        color = "orange"
      }
      return{
        "width":width,
        "background-color": color
      }
    }
  },

  // メソッド
  methods:{
    startTimer(){
        this.active = true;
        this.start = Date.now();
        this.timer = setInterval(()=>{ this.interval = this.accum + (Date.now() - this.start) * 0.001;}, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
    },
    stopTimer(){
        this.active = false;
        this.accum = this.interval;
        clearInterval(this.timer);
    },
    gameStart(){
      this.startFlg = true;
      // カーソルをinputにフォーカスする
      this.$nextTick(function(){
        document.getElementById("typeForm").focus()
      })
    }
  },

  // ライフサイクルフックの一つ | 描画されたタイミングで実行される -> つまり1回
  mounted:function(){
    this.current_question = this.questions[0]
    this.question_counts = this.questions.length
  },

  // ウォッチャ | データが切り替わる度に動作する -> 監視
  watch:{
    typeBox:function(e){
      if(e == this.current_question){
        this.questions.splice(0, 1) //1.配列一つ目を消去
        this.current_question = this.questions[0] //2.一番先頭のお題を格納
        this.typeBox = ""  //3.テキストボックスを空の状態に変更
        this.current_question_counts = this.current_question_counts + 1 // 4.回答した数が増やす
      }
    }
  }
})

const vm = app.mount("#app")