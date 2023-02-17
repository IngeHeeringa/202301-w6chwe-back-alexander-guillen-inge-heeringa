import mongoose from "mongoose";

const connectDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};

export default connectDatabase;
