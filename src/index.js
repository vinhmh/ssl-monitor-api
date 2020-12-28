import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.AdminUser.findByLogin('vinhmh@gmail.com'),
  };
  next();
});

// * Routes * //

app.use('/domian', routes.domain);
app.use('/adminUser', routes.adminUser);

// * Start * //

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Domain.deleteMany({}),
      models.AdminUser.deleteMany({}),
    ]);

    createAdminUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

// * Database Seeding * //

const createAdminUsersWithMessages = async () => {
  const user1 = new models.AdminUser({
    email: 'vinhmh@gmail.com',
  });
  await user1.save();
};
