require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let dbUrl = '';
let sslValue = false
if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
  sslValue =  { rejectUnauthorized: false }
} else if (NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
} else if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else {
  throw new Error('No Database is found !');
}

const options = {
  connectionString: dbUrl,
  ssl: sslValue,
};

const connection = new Pool(options);
module.exports = connection;
