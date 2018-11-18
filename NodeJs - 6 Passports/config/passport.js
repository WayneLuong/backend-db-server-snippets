const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose =  require('mongoose');
const User = mongoose.model('users'); //comes from export User model
const keys = require('../config/keys');

const optn = {};
optn.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
optn.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
    passport.use(new JwtStrategy(optn, (jwt_payload, done)=>{
        console.log(jwt_payload);
        User.findById(jwt_payload.id)
        .then(user=>{
            if (user){
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }));
};