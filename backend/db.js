const mongoose = require('mongoose');  
const mongoURI = "mongodb://localhost:27017/dashboardusers"; // Replace 'yourDatabaseName' with your actual database name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectToMongo;
