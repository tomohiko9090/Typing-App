export default {

  props: {
    diaries: {}
	},

	methods: {
		deleteConfirm(key) {
			if (confirm('本当に削除しますか？')) {
				this.$emit('delete-diary', key)
			}
		},
	},
  
	template: `
    <ul class="diary-list">
      <li v-for="(diary, key) in diaries" :key="key">
        <div class="diary-date">
          {{ diary.date }}
          <button @click="deleteConfirm(key)">削除</button>
        </div>
        <div class="diary-body">{{ diary.body }}</div>
      </li>
    </ul>
	`
}