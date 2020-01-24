import express from 'express'
import user from './users'
import ingresos from './ingresos'
import egresos from './egresos'
import categorias from './categorias'

const router = express.Router()

router.use('/', user)
router.use('/', ingresos)
router.use('/', egresos)
router.use('/', categorias)

router.use(function(err, req, res, next){
    if(err.name === 'ValidationError'){
        return res.status(422).json({
        errors: Object.keys(err.errors).reduce(function(errors, key){
            errors[key] = err.errors[key].message;

            return errors;
        }, {})
        });
    }
  return next(err);
})

export default router;