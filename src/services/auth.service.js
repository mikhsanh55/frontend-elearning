import axios from 'axios'
import authHeader from './auth-header'
// localStorage.setItem('API_URL', 'https://api.lms-sman5bdg.online/')
localStorage.setItem('API_URL', 'http://localhost:8000/')
const API_URL = localStorage.getItem('API_URL')
/*
* This helper class is using for auth stuff
*/
class AuthService {
	constructor() {
		this.initialize()
		this.data = {}
	}

	setAPIUrl(api) {
		this.API_URL = api
	}

	initialize() {
		this.xhr = new XMLHttpRequest()
	}

	login(user) {
		return new Promise((resolve, reject) => {
			var http = this.xhr
			this.formData = new FormData()

			this.formData.append('email', user.email)
			this.formData.append('password', user.password)

			http.open("POST", this.API_URL + 'auth/login')

			http.onload = function() {
				if(this.status >= 200 && this.status < 300) {
					localStorage.setItem('user', http.responseText)
					resolve(http.responseText)
				}
				else {
					var err = JSON.parse(http.responseText),
						errMsg = ''
					for(var key in err) {
						errMsg += err[key]
					}

					this.returnedData = {
						info: http,
						msg: errMsg,
						responseCode: http.status
					}

					reject(this.returnedData)
				}
			}

			http.onerror = function() {
				var err = JSON.parse(http.responseText),
						errMsg = ''
				for(var key in err) {
					errMsg += err[key]
				}

				this.returnedData = {
					info: http,
					msg: errMsg,
					responseCode: http.status
				}

				reject(this.returnedData)
			}

			http.send(this.formData)


			// axios.post('http://localhost:8000/auth/login', {
			// 	email: user.email,
			// 	password: user.password
			// }, {
			// 	headers: authHeader()
			// })
			// .then(response => {
			// 	if(response.status) {
			// 		localStorage.setItem('user', JSON.stringify(response.data))
			// 	}

			// 	resolve(response.data)
			// })
			// .catch(e => reject(e))
		})
	}
	logout() {
		localStorage.removeItem('user')
	}
}

export default new AuthService()