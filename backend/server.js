const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();


app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('👋 Welcome to the ElevateHer Mentoring Platform Backend!');
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log('✅ Server running on http://localhost:4000');
    });
  })
  .catch(err => console.log(err));
