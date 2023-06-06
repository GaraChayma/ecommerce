const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://test:test123@clusterachat.ttqwzmb.mongodb.net/test?retryWrites=true&w=majority',
      {
        
        useNewUrlParser: true,
        useUnifiedTopology: true
      
       
        // DeprecationWarning: collection.ensureInd
      }
    );
    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;