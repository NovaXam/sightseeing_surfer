const Quote = require('../models/sightDB');

module.exports = {

  findAll(req, res, next) {
    Quote.findAll()
    .then(sights => {
      res.locals.sights = sights;
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    });
  },

  findOne(req, res, next) {
    Quote.findById(req.params.id)
    .then(sight => {
      res.locals.sight = sight;
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    });
  },

  update(req, res, next) {
    Quote.update(req.body)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  },

  create(req, res, next) {
    Quote.create(req.body)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  },

  destroy(req, res, next) {
    Quote.destroy(req.params.id)
    .then(() => {
      next();
    }).catch(err => {
      console.log(err);
      next(err);
    })
  }
}
