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
			return authService.login(user)
			.then(user => {
				commit('LOGIN_SUCCESS', user) // update state user with loggedIn data
				return Promise.resolve(user) // continue user data to view
			})
			.catch(e => {
				commit('LOGIN_FAIlURE')
				return Promise.reject(e)
			})
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
	},
	getters: {
		getStatusLoggin: state => {
			return state.status.loggedIn
		}
	}
}