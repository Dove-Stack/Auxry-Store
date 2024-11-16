import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://AUXRYSTORE:jRGbiSC0FYTflVji@cluster0.w3upi.mongodb.net/Auxry-Store"
    )
    .then(() => console.log("MongoDB Connection: Connection Success ✅"));
};

// mongodb+srv://AUXRYSTORE:jRGbiSC0FYTflVji@cluster0.w3upi.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0
