// import mongoose from "mongoose";
// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Mongoose Connection: Success ✅");
//   } catch (error) {
//     console.error("Mongoose Connection Error ❌:", error.message);
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI is not defined.");
    process.exit(1);
  }

  if (isConnected) {
    console.log("🔃 Using existing Mongoose connection");
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });

    isConnected = true;
    console.log(`Mongoose Connected ✅: ${conn.connection.host}`);

    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
      console.log("👩‍💻 Mongoose debug mode is ON (development)");
    }

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Mongoose is disconnected!");
      isConnected = false;
    });

    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("🔌 Mongoose disconnected due to app termination");
      process.exit(0);
    });
  } catch (error) {
    console.error(" ❌ Mongoose Connection Error:", error.message);
    process.exit(1);
  }
};
