require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/carsRoutes');
const connectionDB = require('./src/database/database');

const port = process.env.PORT || 3001;
const application = express();

connectionDB();

application.use(cors());
application.use(express.json());

application.use('/', routes);

application.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
