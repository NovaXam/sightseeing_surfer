const express = require('express');

const sightRouter = express.Router();

const controller = require('../controllers/sightControllers');
const viewCon = require('../controllers/viewControllers');

sightRouter.get('/new', viewCon.showAddSight);

sightRouter.get('/', controller.findAll, viewCon.showSights, viewCon.showError404);
sightRouter.get('/:id', controller.findOne, viewCon.showSingleSight, viewCon.showError404);

sightRouter.get('/:id/edit', controller.findOne, viewCon.showEditForm, viewCon.showError404);
sightRouter.put('/:id', controller.update, viewCon.updateSight, viewCon.showError406);

sightRouter.delete('/:id', controller.destroy, viewCon.goAfterCreateDelete, viewCon.showError406);
sightRouter.post('/', controller.create, viewCon.goAfterCreateDelete, viewCon.showError406);


module.exports = sightRouter;
