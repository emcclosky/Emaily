const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//clientID 346441846289-b13s8inhfsu75mr5jqs0fu4q12e5idmu.apps.googleusercontent.com
//clientSecret k7WmdQCMaahw8NYwVYDL53fY

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);