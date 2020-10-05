import UserService from '../services/user.service'
const isLogin = JSON.parse(localStorage.getItem('user'))
const initialState = isLogin ? {
	nama: user.email,
	email: user.email,
	kelas: user.email,
	id: user.email
} : {
	nama: null,
	email: null,
	kelas: null,
	id: null
}

export const siswa = {
	namespaced: true,
	state: initialState,
	actions: {

	},
	mutations: {
		
	}
}