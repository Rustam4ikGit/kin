import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL
export const getData = async (path) => {
	try {
		const choice = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzg4MWUxOThmNjQ5MTNjYTY4NTdkYTQ0ZDNiODJmMSIsInN1YiI6IjY0ZGY3ZWFkYjc3ZDRiMTE0MjVmYThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH3G3YZKPn3HqmZltY2N7yROjE8MF5ltvTmDWmQGY8Q'
			}
		};
		const res = await axios.get(BASE_URL + path, choice)
		return res
	} catch (e) {
		throw new Error('An error occurred  ' + e.message)
	}
}
export let getDetails = async (path) => {
	try {
		const res = await axios.get(baseURL + path, {
			headers: {
				Authorization: <code>Bearer ${import.meta.env.VITE_API_KEY}</code>,
				Accept: 'application/json'
			}
		})
		return res
	} catch (e) {
		console.log(e);
	}
}
export const postData = async (path, body) => {

	try {
		const res = await axios.post(BASE_URL + path, body)
		return res
	} catch (e) {
		throw new Error('An error occurred  ' + e.message)
	}
}
export const patchData = async (path, body) => {
	try {
		const res = await axios.patch(BASE_URL + path, body)
		return res
	} catch (e) {
		throw new Error('An error occurred  ' + e.message)
	}
}