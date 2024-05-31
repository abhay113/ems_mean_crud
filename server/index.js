
const { json, urlencoded } = require('body-parser'); // Destructure for conciseness
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const apiRouter = require('./routes/route');

// Configuration (Consider Environment Variables)
const port = config.port || process.env.PORT || 3000;
const dbUrl = config.dbUrl || process.env.MONGODB_URI || 'mongodb://localhost:27017/ems';

// Middleware with Consistent Indentation
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors(config.corsOptions || { origin: 'http://localhost:4200', credentials: true, optionSuccessStatus: 200 }));
app.use('/api', apiRouter);
app.use(express.static('public'));

// Database Connection with Promise Handling
mongoose.connect(dbUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

//default page 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

// Server Start with Error Handling
app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});

// Error Handling Middleware (Consider a Dedicated Function)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Internal Server Error' });
});
