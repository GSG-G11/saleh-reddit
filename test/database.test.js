const conniction = require('../server/database/config/connection');
const { insertUser,getUserByEmail } =require('../server/database/queries/usersCRUD');
const createUsersTable = require('../server/database/migrations/createUsersTable');

// beforeAll(() => createUsersTable());

describe("Test database users table queries", () => {
    test("Insert user into users table", () => {
        const expected = {
          username: "Saleh",
          email:'stm19add98@hot.com',
          password: "123123",
        };
        return insertUser(expected).then((data) => {
          expect(data.rows[0].name).toEqual(expected.name);
          expect(data.rows[0].password).toEqual(expected.password);
        });
      });
    test("get user from users table by email", () => {
        const expected = {
          username: "saleh",
          email:'stm1998@hotmail.com',
          password: "123123",
        };
        return getUserByEmail('stm1998@hotmail.com').then((data) => {
          console.log(data.rows);
          expect(data.rows[0].username).toEqual(expected.username);
        });
      });
});