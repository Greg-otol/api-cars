const mongoose = require('mongoose');

const connection = () => {
  mongoose
    .connect(
      'mongodb+srv://GregorioOtOl:grgeotaviaolivia@api-cars.mm3isnv.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(`Not connected to MongoDB, erro: ${err}`));
};

module.exports = connection;
