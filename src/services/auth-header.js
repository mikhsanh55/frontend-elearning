export default function authHeader() {
	let user = JSON.parse(localStorage.getItem('user'))

	if(user && user.token) {
		return { 
			'Access-Control-Allow-Origin': '*',
			Authorization: 'bearer ' + user.token ,
		}
	}
	else {
		return {
			'Access-Control-Allow-Origin': '*',
		}
	}
}