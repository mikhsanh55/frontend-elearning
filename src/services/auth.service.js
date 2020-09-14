import axios from 'axios'

const API_URL = 'https://localhost:8000'

/*
* This helper class is using for auth stuff
*/
class AuthService {
	login(user) {
		return new Promise((resolve, reject) => {
			axios
			.post(API_URL + '/login', {
				username: user.username,
				password: user.password
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