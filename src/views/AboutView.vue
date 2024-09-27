<template>
	<div class="about">
		<h3>{{ name }}</h3>
		<h2>{{ email }}</h2>
	</div>
</template>

<script>
import Repository from '../api/RepositoryFactory'
const UserRepository = Repository.get('users')

export default {
	data() {
		return {
			name : '',
			email : ''
		}
	},
	created() {
		this.getUsers();
	},
	methods : {
		async getUsers() {
			const { data } = await UserRepository.getUsers();
			this.name = data.name;
			this.email = data.email;
		}
	}
}
</script>
<style>
@media (min-width:1024px) {
	.about {
		min-height:100vh;
		display:flex;
		align-items:center;
	}
}
</style>
