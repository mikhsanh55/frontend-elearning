import authService from '../services/auth.service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {
	status: {loggedIn: true},
	user
} : {
	status: {loggedIn: false},
	user: null
}

export const auth = {
	namespaced: true,
	state: initialState,
	actions: {
		login({ commit }, user) {
			return authService.login(user).then(
				user => {
					commit('LOGIN_SUCCESS', user)
					return Promise.resolve(user)
				},
				error => {
					commit('LOGIN_FAIlURE')
					return Promise.reject(error)
				}
			)
		},
		logout({ commit }) {
			authService.logout()
			commit('LOGOUT')
		}
	},
	mutations: {
		LOGIN_SUCCESS(state, user) {
			state.status.loggedIn = true
			state.user = user
		},
		LOGIN_FAIlURE(state) {
			state.status.loggedIn = false
			state.user = null
		},
		LOGOUT(state) {
			state.status.loggedIn = false
			state.user = null
		}
	}
}
