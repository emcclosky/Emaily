const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);
//the required authRoutes file returns a function
//and immediately call that function with the app object

const PORT = process.env.PORT || 5000;
app.listen(PORT);



