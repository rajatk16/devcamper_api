const fs = require('fs');

const mongoose = require('mongoose');

// Load environment variables
const dotenv = require('dotenv').config({
  path: './config/config.env'
});

// Load Models
const Bootcamp = require('./models/Bootcamp');

// Connect to DB
mongoose.connect(
  process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(error)
  }
}

// Delete Data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data Deleted')
  } catch (error) {
    console.error(error)
  }
}

switch (process.argv[2]) {
  case '-i':
    importData();
    break;
  case '-d':
    deleteData();
    break;
  default:
    break;
}