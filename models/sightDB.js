const db = require('../db/config');


const Quote = {};

Quote.findAll = () => {
  return db.many(`SELECT * FROM sightseeings`);
};

Quote.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM sightseeings
      WHERE id = $1`,
      id);
};

Quote.update = (sight) => {
  return db.one(`
    UPDATE sightseeings
    SET
    name = $/name/,
    city = $/city/,
    description = $/description/,
    status = $/status/,
    picture = $/picture/
    WHERE id = $/id/
    RETURNING *
  `, sight);
};

Quote.create = (sight) => {
  return db.one(`
    INSERT INTO sightseeings
    (name, city, description, status, picture)
    VALUES
    ($/name/, $/city/, $/description/, $/status/, $/picture/)
    RETURNING *
     `, sight);
};

Quote.destroy = (id) => {
  return db.none(`
    DELETE FROM sightseeings
      WHERE id = $1`, id);
};

module.exports = Quote;
