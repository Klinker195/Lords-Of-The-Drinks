export const apiLogin = (email, password) => {
	return fetch('http://15.160.76.58:8080/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			mail: email,
			password: password
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json.token
	})
	.catch(error => {
		Alert.alert('Error', 'The request was not successful.');
	})
}

export const apiSignUp = (email, password) => {
	return fetch('http://15.160.76.58:8080/signup', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			mail: email,
			password: password
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json.token
	})
	.catch(error => {
		Alert.alert('Errore', 'The request was not successful.');
	})
}

export const apiLogout = (token) => {
	return fetch('http://15.160.76.58:8080/logout', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: token
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json.token
	})
	.catch(error => {
		Alert.alert('Errore', 'The request was not successful.');
	})
}

export const apiGetVenue = (token) => {
	return fetch('http://15.160.76.58:8080/getvenue', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: token
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json
	})
	.catch(error => {
		Alert.alert('Errore', 'The request was not successful.');
	})
}

export const apiGetVenueDrinks = (token, venueId) => {
	return fetch('http://15.160.76.58:8080/getvenuedrink', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: token,
			venue_id: venueId
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json
	})
	.catch(error => {
		Alert.alert('Errore', 'The request was not successful.');
	})
}

export const apiGetRecommendedVenueDrinks = (token, venueId) => {
	return fetch('http://15.160.76.58:8080/getvenuerecdrink', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: token,
			venue_id: venueId
		})
	})
	.then(response => response.json())
	.then(json => {
		console.log("DRINKS")
		console.log(json)
		return json
	})
	.catch(error => {
		Alert.alert('Errore', 'The request was not successful.');
	})
}