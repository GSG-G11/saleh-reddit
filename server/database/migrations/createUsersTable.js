const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('../config/connection');

const createTables = () => {
  const path = join(__dirname, 'tables.sql');
  const sql = readFileSync(path).toString();
  return connection.query(sql);
};
module.exports = createTables;
