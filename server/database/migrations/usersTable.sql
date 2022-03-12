BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial primary key,
    username varchar(128) not null,
    email varchar(56) unique not null,
    password varchar(200) not null
);
COMMIT;