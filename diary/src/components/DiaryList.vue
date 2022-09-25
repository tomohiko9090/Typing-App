<template>
  <div>
  <ul class="diary-list">
    <li v-for="(diary, key) in diaries" :key="key">
      <div class="diary-date">
        {{ diary?.date }}
        <button @click="deleteConfirm(key)">削除</button>
      </div>
      <div class="diary-body">{{ diary?.body }}</div>
    </li>
  </ul>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
ul.diary-list {
    max-width: 600px;
    padding-left: 0;
    list-style: none;
}
ul.diary-list li {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}
.diary-date {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #777;
}
</style>