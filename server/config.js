
module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/ems',
    corsOptions: {
      origin: 'http://localhost:4200',
      credentials: true,
      optionSuccessStatus: 200
    }
  };
  