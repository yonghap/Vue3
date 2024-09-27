<script>
import Repository from '../api/RepositoryFactory'
const PostRepository = Repository.get('posts')

export default {
	data() {
		return {
		}
	},
	created() {
		this.getPosts();
	},
	methods : {
		async getPosts() {
			const { data } = await PostRepository.get();
			console.log(data);
		}
	}
}

</script>