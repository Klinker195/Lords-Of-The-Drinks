import { Alert } from "react-native"

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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
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
		console.log(json)
		return json
	})
	.catch(error => {
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
	})
}

export const apiSendOrder = (order) => {
	return fetch('http://15.160.76.58:8080/sendorder', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(order)
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		return json.token
	})
	.catch(error => {
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
	})
}

export const apiGetOrderDetails = (token, venueId) => {
	return fetch('http://15.160.76.58:8080/getorderdetails', {
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
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
	})
}

export const apiPayOrder = (token, venueId) => {
	return fetch('http://15.160.76.58:8080/payorder', {
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
		return json.token
	})
	.catch(error => {
		console.error(error)
		Alert.alert('Error', 'An error has occurred during the request.');
	})
}