import axios from 'axios'
import authHeader from './auth-header'
localStorage.setItem('API_URL', 'https://api.lms-sman5bdg.online/')
const API_URL = localStorage.getItem('API_URL')
/*
* This helper class is using for auth stuff
*/
class AuthService {
	login(user) {
		return new Promise((resolve, reject) => {
			axios
			.post(API_URL + 'auth/login', {
				email: user.email,
				password: user.password
			}, {
				headers: authHeader()
			})
			.then(response => {
				if(response.status) {
					localStorage.setItem('user', JSON.stringify(response.data))
				}

				resolve(response.data)
			})
			.catch(e => reject(e))
		})
	}
	logout() {
		localStorage.removeItem('user')
	}
}

export default new AuthService()