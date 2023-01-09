import mongoose from "mongoose";
export function initiateDbConn() {
     try {
          mongoose.connect(process.env.DB_LOCAL);

          console.log("Connected to MongoDB");
     } catch (error) {
          console.log(`Failed to connect to database: ${error.message}`);
     }
}

