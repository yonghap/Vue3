import UserRepository from './UserRepository'
import PostRepository from './PostRepository'

const repositories = {
	'users' : UserRepository,
	'posts' : PostRepository
}

export default {
	get : name => repositories[name]
}