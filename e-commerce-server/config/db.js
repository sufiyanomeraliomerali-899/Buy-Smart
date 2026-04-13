import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not set. Please configure it in Render environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("mongodb successfully connected!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default connectDb;
