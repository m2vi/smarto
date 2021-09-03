import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: 'smarthub',
  });

  return mongoose.connection;
};

export default connect;
