const app = Vue.createApp({
    data(){
        return {
            form: {
              name: "",
              birthday: "",
              gender: "",
              bloodType: "",
              hobby: [],
              message: "",
              confirm: ""
            },
            hobbies: {
              sports: "スポーツ",
              outdoor: "アウトドア",
              reading: "読書",
              music: "音楽",
              movie: "映画",
              game: "ゲーム",
              anime: "アニメ",
              fashon: "ファッション",
              cooking: "料理",
              diy: "DIY",
              other: "その他"
            },
        }
    }
})

const vm = app.mount("#app") 



