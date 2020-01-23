
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
  console.log('validation')
  passport.authenticate('local', {session: false}, async function(err, user, info){

    if(err){ return next(err); }
    console.log(user)
    if(user){
      
      user.token = generateJWT(user.id,user.username);
      console.log(user.token)
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
/*
router.put('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.username !== 'undefined'){
      user.username = req.body.user.username;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    if(typeof req.body.user.bio !== 'undefined'){
      user.bio = req.body.user.bio;
    }
    if(typeof req.body.user.image !== 'undefined'){
      user.image = req.body.user.image;
    }
    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    });
  }).catch(next);
});

router.post('/users', function(req, res, next){
  var user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});*/

export default router;