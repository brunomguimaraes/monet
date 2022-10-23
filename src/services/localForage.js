import localforage from "localforage";

const set = (key, value) => {
	localforage.setItem(key, value).then(function () {
		return localforage.getItem(key);
	}).then(function (value) {
		console.log('=> value', value)
	}).catch(function (err) {
		console.log('=> err', err)
	});
}

const get = (key) => {
	localforage.getItem(key).then(function (value) {
		console.log('=> value', value)
	}).catch(function (err) {
		console.log('=> err', err)
	});
}

const localForage = {
	set,
	get
}

export default localForage;