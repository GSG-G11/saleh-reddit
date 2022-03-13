const conniction = require('../server/database/config/connection');
const { insertUser } =require('../server/database/queries/usersCRUD');
const createUsersTable = require('../server/database/migrations/createUsersTable');

beforeEach(() => createUsersTable());

describe("Test database users table queries", () => {
    test("Insert user into users table", () => {
        const expected = {
          username: "Saleh",
          email:'stm1998@hot.com',
          password: "123123",
        };
        return insertUser(expected).then((data) => {
          expect(data.rows[0].name).toEqual(expected.name);
          expect(data.rows[0].password).toEqual(expected.password);
        });
      });
});