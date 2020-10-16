import axios from 'axios'
import authHeader from './auth-header'


	 const infoUser = JSON.parse(localStorage.getItem('user'))

class UserService {
	constructor(apiUrl) {
		this.apiUrl = apiUrl
		this.initialize()
		this.apiUrl = localStorage.getItem('API_URL')
	}
	initialize() {
		this.xhr = new XMLHttpRequest()
	}
	getProfile() {
		return axios.get(this.apiUrl + '/profile', {headers: authHeader()})
	}
	getNavigationMenu() {
		return [
			{label: 'Kelas', "class": ''},
			{label: 'Jadwal', "class": 'uk-active'},
			{label: 'Ujian', "class": ''},
			{label: 'Nilai', "class": ''},
			{label: 'Penilaian Guru', "class": ''},
		]
	}	
	getMapel() {
		return new Promise((resolve, reject) => {
			var http = this.xhr,
				userId = infoUser.id_akun

			http.open("GET", this.apiUrl + `mapel/get_mapel/${userId}`)
			http.setRequestHeader('Authorization', `bearer ${infoUser.token}`)
			http.overrideMimeType('application/json')

			http.onload = function() {
				if(this.status >= 200 && this.status < 300) {
					resolve(http.responseText)
				}
				else {
					reject(http.responseText)
				}
			}

			http.onerror = function() {
				reject(http.responseText)
			}

			http.send(null)
		})
	}
}

export default new UserService()