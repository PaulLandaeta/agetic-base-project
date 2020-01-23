
import express from  'express'
import passport  from 'passport'
import User from '../../models/user'
import auth from  '../auth'
import generateJWT from '../../services/User'
import { getUser } from '../../controller/user.controller'

const router = express.Router()

router.get('/user/:username', auth.required, async function(req, res, next){
    const { username } = req.params
    const user = await getUser(username)
    res.json(user)

});

router.post('/users/login', function(req, res, next){
  if(!req.body.user.username){
    return res.status(422).json({errors: {username: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }
  
  passport.authenticate('local', {session: false}, async function(err, user, info){

    if(err){ return next(err); }
    
    if(user){
      
      user.token = generateJWT(user.id,user.username);
      
      await user.save()
      return res.json({user: user});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

  router.post('/user/create', auth.required, function(req, res) {
    User.create({
      username: req.body.username
    }).then(function() {
      res.redirect('/');
    });
  });

export default router;