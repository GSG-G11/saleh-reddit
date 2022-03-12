const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('../config/connection');

const createUsersTable = () => {
  const path = join(__dirname, 'usersTable.sql');
  const sql = readFileSync(path).toString();
  return connection.query(sql);
};
module.exports = createUsersTable;
