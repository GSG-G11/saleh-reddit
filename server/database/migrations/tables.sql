BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

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

COMMIT;