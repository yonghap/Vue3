import UserRepository from './UserRepository'
import PostRepository from './PostRepository'
import LocationAPI from './locationAPI'

export default (name) => ({
	'users' : UserRepository,
	'posts' : PostRepository,
	'location' : LocationAPI
})
