import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://localhost:8000'

class UserService {
	getProfile() {
		return axios.get(API_URL + '/profile', {headers: authHeader()})
	},
	getNavigationMenu() {

	},
	getMapel() {
		
	}
}

export default new UserService()