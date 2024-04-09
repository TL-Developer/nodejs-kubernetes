import { faker } from '@faker-js/faker';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    vehicle: faker.vehicle.vehicle(),
    manufacturer: faker.vehicle.manufacturer(),
    vrm: faker.vehicle.vrm(),
    model: faker.vehicle.model(),
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
    type: faker.vehicle.type(),
  });
});

app.listen(3000, () => console.log('server listening on port 3000'));