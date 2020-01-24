
import express from  'express'
import passport  from 'passport'
import User from '../../models/user'
import auth from  '../auth'
import generateJWT from '../../services/User'
import { getIngresos, getIngresosByUser , createIngreso} from '../../controller/ingresos.controller'

const router = express.Router()

router.get('/ingresos/user/:id', auth.required, async function(req, res, next){
    const { id } = req.params
    const ingresos = await getIngresosByUser(id)
    res.json(ingresos)
});


router.get('/ingresos', auth.required, async function(req, res, next){
    const ingresos = await getIngresos()
    res.json(ingresos)
});

router.post('/ingresos', auth.required, async function(req, res, next){
    
    const ingreso  = await createIngreso(req.body)
    res.json(ingreso)
});


export default router;