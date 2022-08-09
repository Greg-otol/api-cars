const Cars = require('../models/cars');

const createCarService = async (newCar) => {
  const car = await Cars.create(newCar);
  return car;
};

const allCarsService = async () => {
  return await Cars.find();
};

const findByIdCarService = async (idParam) => await Cars.findById(idParam);

const updateCarService = async (idParam, carEdited) => {
  const updateCar = await Cars.findByIdAndUpdate(idParam, carEdited).setOptions(
    { returnOriginal: false },
  );
  return updateCar;
};

const deleteCarService = async (idParam) =>
  await Cars.findByIdAndDelete(idParam);

const searchCarService = (name) =>
  Cars.find({
    name: { $regex: `${name || ''}`, $options: 'i' },
  });

module.exports = {
  createCarService,
  allCarsService,
  findByIdCarService,
  updateCarService,
  deleteCarService,
  searchCarService,
};
