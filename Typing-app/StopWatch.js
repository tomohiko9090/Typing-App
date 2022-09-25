// export default {

//     data(){
//         return {
//             active : false, // 実行状態
//             start : 0, // startを押した時刻
//             timer : 0, // setInterval()の格納用
//             interval : 0, // 計測時間
//             accum : 0, // 累積時間(stopしたとき用)
//         }
//     },

//     methods:{
//         startTimer(){
//             this.active = true;
//             this.start = Date.now();
//             this.timer = setInterval(()=>{ this.interval = this.accum + (Date.now() - this.start) * 0.001;}, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
//          },
//         stopTimer(){
//             this.active = false;
//             this.accum = this.interval;
//             clearInterval(this.timer);
//         },
//         resetTimer(){
//             this.interval = 0;
//             this.accum = 0;
//             this.start = Date.now();
//         }
//     },

//   template: `
//   <div>
//     <p>{{interval.toFixed(2)}}</p> <!-- 小数2桁まで表示 -->
//     <button @click="startTimer()" v-show="!active">Start</button>
//     <button @click="stopTimer()" v-show="active">Stop</button>
//     <button @click="resetTimer()">Reset</button>
//   </div>  `
// }
