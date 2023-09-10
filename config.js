const { REACT_APP_API_KEY, DATABASE_URL } = require('./env');

module.exports = {
    apiKey: REACT_APP_API_KEY,
    databaseUrl: DATABASE_URL,
    dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
    }
  };