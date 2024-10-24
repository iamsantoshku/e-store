// const mongoose = require("mongoose")


// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB



const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Recommended options for compatibility
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Optional: exit the process if the connection fails
  }
}

module.exports = connectDB;
