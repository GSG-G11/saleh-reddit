BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    id serial primary key,
    username varchar(128) not null,
    email varchar(56) unique not null,
    password varchar(200) not null
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    community_name VARCHAR(100) NOT NULL,
    vote INTEGER DEFAULT 0,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content_type VARCHAR(100) DEFAULT 'text',
    post_date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    vote INTEGER DEFAULT 0,
    date TIMESTAMP NOT NULL DEFAULT NOW()
);
COMMIT;

