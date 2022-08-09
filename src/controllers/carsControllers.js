const carsService = require('../services/carsServices');

const createCarController = async (req, res) => {
  const car = req.body;
  if (!car || !car.name || !car.image || !car.year) {
    res.status(404).send({ message: 'Fill in all fields!' });
  } else {
    const newCar = await carsService.createCarService(car);
    res.status(201).send({ message: 'successfully created', newCar });
  }
};

const allCarsController = async (req, res) => {
  const allCars = await carsService.allCarsService();
  if (allCars.length == 0) {
    res.status(400).send({ message: 'There is no registered!' });
  } else {
    res.send(allCars);
  }
};

const findByIdCarController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCar = await carsService.findByIdCarService(idParam);
  if (!chosenCar) {
    res.status(400).send({ message: 'Not found!' });
  } else {
    res.send(chosenCar);
  }
};

const updateCarController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCar = await carsService.findByIdCarService(idParam);
  const carEdit = req.body;

  if (!chosenCar) {
    res.status(400).send({ message: 'Not found!' });
  } else if (!carEdit || !carEdit.name || !carEdit.image || !carEdit.year) {
    return res.status(400).send({ message: 'Fill in all fields!' });
  } else {
    const updatedCar = await carsService.updateCarService(idParam, carEdit);
    res.status(200).send({
      message: 'Updated successfully!',
      updatedCar,
    });
  }
};

const deleteCarController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCar = await carsService.findByIdCarService(idParam);
  if (!chosenCar) {
    res.status(400).send({ message: 'Not found!' });
  } else {
    await carsService.deleteCarService(idParam);
    res.status(200).send({
      message: `Removed successfully!!`,
    });
  }
};

const searchCarController = async (req, res) => {
  const { name } = req.query;
  const cars = await carsService.searchCarService(name);
  if (cars.length === 0) {
    return res.status(400).send({ message: 'This name does not exist!' });
  }
  return res.send({ cars });
};

module.exports = {
  createCarController,
  allCarsController,
  findByIdCarController,
  updateCarController,
  deleteCarController,
  searchCarController,
};
