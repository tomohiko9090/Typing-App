<template>

	<div>
		<!-- 1.登録するをクリックする -->
		<diary-form @add-diary="addDiary" />
		<diary-list :diaries="diaries" @delete-diary="deleteDiary" />
	</div>
</template>

<script>
import DiaryForm from './components/DiaryForm.vue'
import DiaryList from './components/DiaryList.vue'

export default {
  name: 'App',
  components: {
    DiaryForm,
    DiaryList
  },

  data() {
		return {
			diaries: [],
		}
	},
  
	created() {		
		this.readDiary()
	},

	methods: {
		readDiary() { // 読み込む
			const json_data = localStorage.getItem('diary')
			this.diaries = JSON.parse(json_data) || []
		},

		// 3.ローカルストレージにjson形式で書き込む（毎回全部書き込んでいるということ？）
		saveDiary() { // 書き込む
			localStorage.setItem('diary', JSON.stringify(this.diaries)) 
		},

		// 2.以下のメソッドが実行（テキストデータと日時データがdiariesの辞書型に追加される）
		addDiary(body) { // 投稿する
			const date = new Date
			this.diaries.push({
				body: body,
				date: date.toLocaleString(),
			})
			this.saveDiary()
		},
		
		deleteDiary(key) { // 削除する
			this.diaries.splice(key, 1)
			this.saveDiary()
		},
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
