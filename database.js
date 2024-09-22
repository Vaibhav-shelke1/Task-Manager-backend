import mongoose from 'mongoose';

const mongoUrl = "mongodb+srv://vaibhavshelke218:pass123@taskmanager.m8tbx.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=taskManager";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

export default connectToMongo;
