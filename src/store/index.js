import {createStore} from "vuex";
import Repository from '../api/RepositoryFactory'

const PostRepository = Repository.get('posts')

export default createStore({
	state: {
		posts: [],
		korSubCategory: {
			id: 'test',
			name: '5'
		},
	},
	getters: {
		getTest(state) {
			return state.korSubCategory;
		}
	},
	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts
		},
		SET_TEST(state, test) {
			state.test = test
		}
	},
	actions: {
		async get_posts({commit}) {
			const res = await PostRepository.get()
			const {status, data} = res
			commit('SET_POSTS', data)
		},
		async get_photos({commit}) {
			const res = await PostRepository.getPhotos()
			const {status, data} = res;
			return data;
		},
		async get_games({commit}) {
			const res = await PostRepository.getGameList()
			const {status, data} = res;
			return data;
		},
		async get_gameDetail({commit}, id) {
			const res = await PostRepository.getGameDetail(id)
			const {status, data} = res;
			return data;
		}
	}
});