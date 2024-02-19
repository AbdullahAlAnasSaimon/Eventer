import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rencz4l.mongodb.net/?retryWrites=true&w=majority`;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  try {
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URI, {
        dbName: "eventer",
        bufferCommands: false,
      });

    cached.conn = await cached.promise;

    // Check if the connection is successful
    if (cached.conn) {
      console.log("Database connection established successfully");
    } else {
      console.error("Failed to establish database connection");
    }

    return cached.conn;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Re-throw the error to be handled elsewhere if needed
  }
};
