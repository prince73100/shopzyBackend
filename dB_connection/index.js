import mongoose from "mongoose";

 const dbconnections = async () => {
    try {
      const connection  = await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log("Error from database connection:", error);
    }
}

export default dbconnections
