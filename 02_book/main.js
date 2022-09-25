const app = Vue.createApp({
    data(){
        return {
            newBook: {title: "", author: ""},
            books: [
                {title: '坊っちゃん', author: '夏目漱石'},
                {title: '蟹工船', author: '志賀直哉'},
                {title: '銀河鉄道の夜', author: '宮沢賢治'},
              ],
        }
    },
    methods:{
    // 書籍を追加
    addBook() {
        this.books.push(this.newBook)
        // this.newBook = { title: '', author: '' }
      },
      // 書籍を削除
      deleteBook(key) {
        if (confirm('本当に削除しますか？')) {
          this.books.splice(key, 1)
        }
      }
    }
})

const vm = app.mount("#app") 



