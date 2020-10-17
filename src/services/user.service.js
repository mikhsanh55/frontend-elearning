import axios from 'axios'
import authHeader from './auth-header'

let infoUser = null !== localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

class UserService {
	constructor() {
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
				userId = JSON.parse(localStorage.getItem('user'))
			this.apiUrl = localStorage.getItem('API_URL')
			http.open("GET", this.apiUrl + `mapel/get_mapel/${userId.id_akun}`)
			http.setRequestHeader('Authorization', `bearer ${userId.token}`)
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
	/*
	* Get Semua materi berdasarkan mapelnya
	*/
	getMateriByMapel(kodeMapel = 0) {
		return new Promise((resolve, reject) => {
			var http = this.xhr,
				params = [
					['id_mapel', kodeMapel]
				],
				userId = JSON.parse(localStorage.getItem('user'))

			this.formData = new FormData()
			this.formData.append('filter', JSON.stringify(params))

			http.open("POST", `${this.apiUrl}materi/filter_many_by`)
			http.setRequestHeader('Authorization', `bearer ${userId.token}`)
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

			http.send(this.formData)
		})
	}
}

export default new UserService()