import jwt from 'jsonwebtoken'
import { config } from '../config'

const { secret } = config
const generateJWT = (id,username) => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
      id: id,
      username: username,
      exp: parseInt(exp.getTime() / 1000),
    }, secret);
}

export default generateJWT;