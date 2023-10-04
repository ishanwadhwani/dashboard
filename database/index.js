import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to ${db.connection.name} database.`);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
