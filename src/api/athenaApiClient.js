import request from '../services/axios'

const athenaApiClient = {
	auth: {
		login(email, password) {
			return _standardPost(
				'Login',
				'/auth/login',
				{
					email,
					password,
				},
			);
		},

		//   logout() {
		//     return _standardGet('Logout', '/auth/logout', null, false, true);
		//   },

	},


};

export default athenaApiClient;

////////////////////////////////////////////////////////////////////////////////
///////////////////////// Internal Functions ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const _defaultSuccessHandler = ({ result }) => result;

const _createDefaultErrorHandler = (thing, operation = 'retrieve') => (err) => {
	console.log(
		`Failed to ${operation} "${thing}" from API with error: `,
		err.errorCode,
	);

	return Promise.reject(err);
};

// const _standardGet = (
// 	endpointEntity,
// 	uri,
// 	params = {},
// 	fullResponse = false,
// 	selfRequest = false,
// ) => {
// 	const successHandler = fullResponse ? (x) => x : _defaultSuccessHandler;

// 	const requestPromise = request.get(
// 		`${selfRequest ? '' : '/api'}${uri}`,
// 		params,
// 		selfRequest,
// 	);

// 	let resultPromise = requestPromise
// 		.then(successHandler)
// 		.catch(_createDefaultErrorHandler(endpointEntity));

// 	// Expose the abort API on the resulting promise
// 	resultPromise.abort = () => requestPromise.abort();

// 	return resultPromise;
// };

const _standardPost = (
	endpointEntity,
	uri,
	payload = {},
) => {
	const requestPromise = request.post(
		`${uri}`,
		payload,
	);

	let resultPromise = requestPromise
		.then(_defaultSuccessHandler)
		.catch(_createDefaultErrorHandler(endpointEntity, 'update'));

	// Expose the abort API on the resulting promise
	// resultPromise.abort = () => requestPromise.abort();

	return resultPromise;
};

// const _standardPut = (
// 	endpointEntity,
// 	uri,
// 	payload = {},
// 	selfRequest = false,
// ) => {
// 	const requestPromise = request.put(
// 		`${selfRequest ? '' : '/api'}${uri}`,
// 		payload,
// 		selfRequest,
// 	);

// 	let resultPromise = requestPromise
// 		.then(_defaultSuccessHandler)
// 		.catch(_createDefaultErrorHandler(endpointEntity, 'save'));

// 	// Expose the abort API on the resulting promise
// 	resultPromise.abort = () => requestPromise.abort();

// 	return resultPromise;
// };

// const _standardDelete = (
// 	endpointEntity,
// 	uri,
// 	payload = {},
// 	selfRequest = false,
// ) => {
// 	const requestPromise = request.delete(
// 		`${selfRequest ? '' : '/api'}${uri}`,
// 		payload,
// 		selfRequest,
// 	);

// 	let resultPromise = requestPromise
// 		.then(_defaultSuccessHandler)
// 		.catch(_createDefaultErrorHandler(endpointEntity, 'delete'));

// 	// Expose the abort API on the resulting promise
// 	resultPromise.abort = () => requestPromise.abort();

// 	return resultPromise;
// };
