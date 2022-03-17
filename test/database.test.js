const conniction = require('../server/database/config/connection');
const createUsersTable = require('../server/database/migrations/createTables');
const { insertUser, getUserByEmail } = require('../server/database/queries/usersCRUD');
const {
  insertPost,
  getUserPosts,
  getPosts,
  getRecentPosts,
  increaseVote,
  decreaseVote,
  insertComment,
  getPostComments,
  getUserComments,

} = require('../server/database/queries');

const expectedPost = {
  title: 'posts',
  content: 'posts posts posts posts',
  community_name: 'posts',
  user_id: '1',
  content_type: 'text',
};
const expectedComment = {
  content: 'posts posts posts posts',
  user_id: '1',
  post_id: '1',
};

beforeAll(createUsersTable);
afterAll(() => conniction.end());

describe('Test database users table queries', () => {
  test('Insert user into users table', () => {
    const expected = {
      username: 'Saleh',
      email: 'stm19add98@hot.com',
      password: '123123',
    };
    return insertUser(expected).then((data) => {
      expect(data.rows[0].name).toEqual(expected.name);
      expect(data.rows[0].password).toEqual(expected.password);
    });
  });
  test('Insert user into users without email', () => {
    const expected = {
      username: 'Saleh',
      password: '123123',
    };
    return insertUser(expected).then((data) => {
    }).catch((err) => {
      expect(err.message).toEqual('null value in column "email" of relation "users" violates not-null constraint');
    });
  });
  test('get user from users table by email', () => {
    const expected = {
      username: 'Saleh',
      email: 'stm19add98@hot.com',
      password: '123123',
    };
    return getUserByEmail(expected.email).then((data) => {
      expect(data.rows[0].username).toEqual(expected.username);
    });
  });
});

describe('Test database posts table queries', () => {
  test('Insert user into posts table', () => insertPost(expectedPost).then((data) => {
    expect(data.rows[0].title).toEqual(expectedPost.title);
  }));
  test('get users posts', () => getUserPosts(expectedPost.user_id).then((data) => {
    expect(data.rows[0].title).toEqual(expectedPost.title);
  }));
  test('get all posts', () => getPosts().then((data) => {
    expect(data.rows[0].title).toEqual(expectedPost.title);
  }));
  test('get all getRecentPosts', () => getRecentPosts().then((data) => {
    expect(data.rows[0].title).toEqual(expectedPost.title);
  }));
  test('increase vote', () => increaseVote(1).then((data) => {
    expect(data.rows[0].vote).toEqual(1);
  }));
  test('decrease vote', () => decreaseVote(1).then((data) => {
    expect(data.rows[0].vote).toEqual(0);
  }));
});
describe('Test database comments table queries', () => {
  test('Insert user into comments table', () => insertComment(expectedComment).then((data) => {
    expect(data.rows[0].title).toEqual(expectedComment.title);
  }));
  test('Get Post Comments from table', () => getPostComments(1).then((data) => {
    expect(data.rows[0].title).toEqual(expectedComment.title);
  }));
  test('Get user Comments from table', () => getUserComments(1).then((data) => {
    expect(data.rows[0].title).toEqual(expectedComment.title);
  }));
});
