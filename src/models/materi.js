/*
* Moda Class untuk Materi
*/
export default class Materi {
	constructor() {
		this.initialize()
		this.apiUrl = localStorage.getItem('API_URL')
	}
	initialize() {
		this.xhr = new XMLHttpRequest()
	}

	/*
	* Get List files PDF atau PPT
	*/
	getListFiles(idMateri, type = 'pdf') {
		return new Promise((resolve, reject) => {
			var http = new XMLHttpRequest(),
				user = JSON.parse(localStorage.getItem('user'))

			http.open('GET', this.apiUrl + `materi/get-list-files?materi=${idMateri}&type=${type}`)
			http.setRequestHeader('Authorization', `bearer ${user.token}`)
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