const TWILIO_ERROR_CODES_LIST = require('./twilio-error-codes.json');
const TWILIO_ERROR_CODES_MAP = (() => {
	const result = {};

	TWILIO_ERROR_CODES_LIST.forEach(v => {
		result[v.code] = v;
	});

	return result;
})();

module.exports = {
	TWILIO_ERROR_CODES_LIST,
	TWILIO_ERROR_CODES_MAP
};
