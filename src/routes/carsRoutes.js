const routes = require('express').Router();
const carsController = require('../controllers/carsControllers');

routes.post('/create', carsController.createCarController);
routes.get('/', carsController.allCarsController);
routes.get('/:id', carsController.findByIdCarController);
routes.put('/update/:id', carsController.updateCarController);
routes.delete('/delete/:id', carsController.deleteCarController);
routes.get('/search', carsController.searchCarController);

module.exports = routes;
