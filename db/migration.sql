\connect sightseeing_db_dev;

DROP TABLE IF EXISTS sightseeings;

CREATE TABLE sightseeings (
  id serial PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  city VARCHAR(30),
  description TEXT NOT NULL DEFAULT 'more description',
  status BOOLEAN NOT NULL DEFAULT false,
  picture VARCHAR(255)
);

CREATE INDEX ON sightseeings(name);
