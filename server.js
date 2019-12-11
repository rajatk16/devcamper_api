const express = require('express');
const dotenv = require('dotenv').config({
  path: './config/config.env'
})
const morgan = require('morgan');

const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

connectDB();

const app = express();

// Body Parser
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} and listening at PORT ${PORT}`
  );
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`ERROR: ${error.message}`);
  server.close(() => {
    process.exit(1);
  })
})