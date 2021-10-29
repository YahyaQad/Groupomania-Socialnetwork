// Développeur Web  - Yahya Qaddouri
// Exports
export const GET_TRENDS = 'GET_TRENDS';

// Logique des fonctions 

// GET_TRENDS
export const getTrends = (sortedArray) => {
	return dispatch => {
		dispatch({ type: GET_TRENDS, payload: sortedArray });
	};
};