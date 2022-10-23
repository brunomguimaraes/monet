import axios from 'axios';

import config from '../config'
// TODO: authToken stuff
//  let authToken = null;

let service = {
	// /**
	//  * Build request URL for passed path.
	//  *
	//  * @param {String} path Path to request
	//  * @param {Boolean} selfRequest If true, make request to self server rather
	//  * than the API
	//  *
	//  * @return {String} Return path for API request
	//  */
	// url(path, selfRequest = false) {
	// 	return (selfRequest ? '/api' : config.API_URL) + path;
	// },

	// /**
	//  * Perform a GET request.
	//  *
	//  * @param {String} path Path to request
	//  * @param {Object} args Args to pass with request
	//  * @param {Boolean} selfRequest If true, make request to self server rather
	//  * than the API
	//  *
	//  * @return {Promise} Returns request result or error
	//  */
	// get(path, args, selfRequest = false) {
	// 	// Make sure args exists
	// 	args = args || {};
	// 	const method = 'GET';

	// 	let abort;
	// 	let resultPromise = new Promise((resolve, reject) => {
	// 		const req = service
	// 			.setAuthHeader(request.get(service.url(path, selfRequest)))
	// 			.query(args);

	// 		// Save request abort API
	// 		abort = _createRequestAbortHandler(req, path, method);

	// 		req
	// 			.then(_createDefaultSuccessHandler(resolve, reject))
	// 			.catch(_createDefaultFailureHandler(reject));
	// 	});

	// 	// Expose the abort API on the resulting promise
	// 	resultPromise.abort = abort;

	// 	return resultPromise;
	// },

	/**
	 * Perform a POST request.
	 *
	 * @param {String} path Path to request
	 * @param {Object} args Args to pass with request
	 *
	 * @return {Promise} Returns request result or error
	 */
	post(path, args) {
		let promise = new Promise((resolve, reject) => {
			const request = axios({
				method: 'post',
				url: path,
				data: args,
				baseURL: config.API_URL
			});

			request.then((res) => {
				return resolve(res.data);
			}
			).catch((err) => {
				console.log(err)
				reject(new Error(err.message))
			})
		})

		return promise;
	},

	// /**
	//  * Perform a PUT request.
	//  *
	//  * @param {String} path Path to request
	//  * @param {Object} args Args to pass with request
	//  *
	//  * @return {Promise} Returns request result or error
	//  */
	// put(path, args) {
	// 	// Make sure args exists
	// 	args = args || {};
	// 	const method = 'PUT';

	// 	let abort;
	// 	let resultPromise = new Promise((resolve, reject) => {
	// 		const req = service
	// 			.setAuthHeader(request.put(service.url(path)))
	// 			.send(args);

	// 		// Save request abort API
	// 		abort = _createRequestAbortHandler(req, path, method);

	// 		req
	// 			.then(_createDefaultSuccessHandler(resolve, reject))
	// 			.catch(_createDefaultFailureHandler(reject));
	// 	});

	// 	// Expose the abort API on the resulting promise
	// 	resultPromise.abort = abort;

	// 	return resultPromise;
	// },

	// /**
	//  * Perform a DELETE request.
	//  *
	//  * @param {String} path Path to request
	//  * @param {Object} args Args to pass with request
	//  *
	//  * @return {Promise} Returns request result or error
	//  */
	// delete(path, args) {
	// 	// Make sure args exists
	// 	args = args || {};
	// 	const method = 'DELETE';

	// 	let abort;
	// 	let resultPromise = new Promise((resolve, reject) => {
	// 		const req = service
	// 			.setAuthHeader(request.delete(service.url(path)))
	// 			.send(args);

	// 		// Save request abort API
	// 		abort = _createRequestAbortHandler(req, path, method);

	// 		req
	// 			.then(_createDefaultSuccessHandler(resolve, reject))
	// 			.catch(_createDefaultFailureHandler(reject));
	// 	});

	// 	// Expose the abort API on the resulting promise
	// 	resultPromise.abort = abort;

	// 	return resultPromise;
	// },

	// /**
	//  * Modify passed request instance with standard auth header if user has an
	//  * active session. If user doesn't have a session active, nothing will be set.
	//  *
	//  * @param {Object} currentRequest Request instance to modify
	//  *
	//  * @return {Object} Returns request instance, modified with auth header if
	//  * available
	//  */
	// setAuthHeader(currentRequest) {
	// 	return currentRequest.set({
	// 		...(authToken ? { Authorization: `Bearer ${authToken}` } : null),
	// 	});
	// },
};

export default service;

///////////////////////////// MODULE PRIVATE FUNCTIONS //////////////////////////////

// function _createRequestAbortHandler(req, path, method = '') {
// 	return () => {
// 		return new Promise((resolve, reject) => {
// 			try {
// 				req.abort();
// 			} catch (e) {
// 				reject(`Failed to abort "${method}" request to "${path}"`);
// 			} finally {
// 				resolve(`Aborted "${method}" request to "${path}"`);
// 			}
// 		});
// 	};
// }

// function _createDefaultSuccessHandler(resolve, reject) {
// 	return (res) => {
// 		if (!res.body.success) {
// 			log.error(
// 				`Request to ${res.req.url} responded with status ${res.status} ` +
// 				`but returned "success: ${res.body.success}" with error: `,
// 				res.body.error,
// 			);

// 			return reject(new Error(res.body.error));
// 		}

// 		return resolve(res.body);
// 	};
// }

// function _createDefaultFailureHandler(reject) {
// 	return (err) => {
// 		const { message, response, url, method } = err;

// 		if (!response) {
// 			log.error(
// 				`${method} Request to ${url} failed and got no response due to: `,
// 				message,
// 			);

// 			return reject('noResponseFromServer');
// 		}

// 		const { status, body } = response || {};

// 		// For some special status codes, response returned from server is not
// 		// actually a hard error, but alternate content, such as 301 content or 410
// 		// content (content for spaces/rooms which are no longer active). In these
// 		// cases, the API response will be normal with a success flag and a result,
// 		// so just send these on from the reject handler
// 		if (body?.success) {
// 			return reject({ status, ...body });
// 		}

// 		log.error(
// 			`${method} Request to ${url} responded with status ${status}: "${body?.error}"`,
// 		);

// 		if (status === 403) {
// 			return setAppError((AppLevelErrorTypes) => AppLevelErrorTypes.Forbidden);
// 		}

// 		// If user is unathorized, their access token is probably bad/expired, so
// 		// log them out and kick them back to the login
// 		if (status === 401) {
// 			// Handle cases where token get invalid for some reason
// 			if (body.error === 'invalidCredentials') {
// 				replaceRoute(route('login'));
// 				logout();
// 				return createErrorNotification(body.displayError);
// 			}
// 		}
// 		const {
// 			// Renamed field error just so in catch
// 			// statements we don't do error.error ¯\_(ツ)_/¯
// 			error: errorCode,
// 			// remaining
// 			displayError,
// 			success,
// 		} = body || {};

// 		return reject({
// 			// Add any field that is relevant on request error handling in here
// 			success,
// 			displayError,
// 			errorCode,
// 			status,
// 		});
// 	};
// }
