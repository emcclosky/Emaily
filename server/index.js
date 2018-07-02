const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys')
require('./models/user');

mongoose.connect(keys.mongoURI);


const app = express();

require('./routes/authRoutes')(app);
//the required authRoutes file returns a function
//and immediately call that function with the app object

const PORT = process.env.PORT || 5000;
app.listen(PORT);



