module.exports = {

  showError404(err, req, res, next) {
    res.sendStatus(404);
  },

  showError406(err, req, res, next) {
    res.sendStatus(406);
  },

  showSights(req, res) {
    res.render('pages/sights', {
      message: 'ok',
      data: res.locals.sights
    });
  },

  showSingleSight(req, res) {
    res.render('pages/sight-single', {
      message: 'ok',
      data: res.locals.sight
    })
  },

  updateSight(req, res) {
    res.redirect(`/sights/${req.params.id}`);
  },

  goAfterCreateDelete(req, res) {
    res.redirect('/sights');
  },

  showAddSight(req, res) {
    res.render('pages/sight-add');
  },

  showEditForm(req, res) {
    res.render('pages/sight-edit', {
      message: 'ok',
      data: res.locals.sight
    })
  }
}
