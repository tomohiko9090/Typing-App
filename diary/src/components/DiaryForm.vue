<template>
  <form class="diary-form" @submit.prevent="submitDiary()">
    <div><textarea v-model="body" rows="3"></textarea></div>
    <button type="submit">投稿する</button>
  </form>
</template>

<script>
export default {
	data() {
		return {
			body: '',
		}
	},
	methods: {
		submitDiary() {
			this.$emit('add-diary', this.body)
			this.body = ''
		},
	},	
}
</script>

<style scoped>
form.diary-form textarea {
  width: 300px;
}
</style>
