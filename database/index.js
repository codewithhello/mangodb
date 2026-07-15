const mongoose = require('mongoose');


async function mongodbConnect () {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connectd");
}

module.exports = mongodbConnect;

