const express = require('express');
console.log('loaded express')
const routeController = require('./../controllers/tourController');
console.log('loaded route controller')

const router = express.Router();
router.param('id', routeController.checkId);

router
    .route('/')
    .get(routeController.getAll)
    .post(routeController.checkBody, routeController.createTour);

router
    .route('/:id')
    .get(routeController.getTour)
    .patch(routeController.updateTour)
    .delete(routeController.deleteTour);

module.exports = router;