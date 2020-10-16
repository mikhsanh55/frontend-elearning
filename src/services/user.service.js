import axios from 'axios'
import authHeader from './auth-header'

const API_URL = localStorage.getItem('API_URL'),
		infoUser = JSON.parse(localStorage.getItem('user'))

class UserService {
	getProfile() {
		return axios.get(API_URL + '/profile', {headers: authHeader()})
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
		return axios.get(API_URL + 'materi/find/13', {
			headers: authHeader()
		})
	}
}

export default new UserService()