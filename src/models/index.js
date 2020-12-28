import mongoose from 'mongoose';

import Domain from './domain';
import AdminUser from './adminUser';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Domain, AdminUser };

export { connectDb };

export default models;
