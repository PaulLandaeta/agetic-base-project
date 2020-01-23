import passport from 'passport'
import passportLocal  from 'passport-local'
import { getUser } from '../controller/user.controller'
const LocalStrategy = passportLocal.Strategy;


passport.use(new LocalStrategy({
  usernameField: 'user[username]',
  passwordField: 'user[password]'
}, async function(username, password, done) {
  const user = await getUser(username)
  //TODO: mejorar la verificacion
  if(user && user.password === password){
    return done(null, user);
  }
  return done(null, false, {errors: {'email or password': 'is invalid'}});
}));