const TWILIO_ERROR_CODES_LIST = require("./twilio-error-codes.json");
const TWILIO_ERROR_CODES_MAP = new Map();
const TWILIO_ERROR_CODE_SET = new Set();

TWILIO_ERROR_CODES_LIST.forEach((error) => {
  error.date_created = new Date(error.date_created);
  error.last_updated = new Date(error.last_updated);

  TWILIO_ERROR_CODE_SET.add(error.code);
  TWILIO_ERROR_CODES_MAP.set(error.code, error);
});

Object.freeze(TWILIO_ERROR_CODES_LIST);
Object.freeze(TWILIO_ERROR_CODES_MAP);
Object.freeze(TWILIO_ERROR_CODE_SET);

module.exports = {
  TWILIO_ERROR_CODES_LIST,
  TWILIO_ERROR_CODES_MAP,
  TWILIO_ERROR_CODE_SET,
};
