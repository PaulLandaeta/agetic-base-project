import jwt from 'express-jwt'
import { config } from '../config'

const { secret } = config

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

let auth = {
  required: jwt({
    secret: secret,
    //userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    //userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

export default auth;