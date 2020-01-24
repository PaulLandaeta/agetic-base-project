
import express from  'express'
import auth from  '../auth'
import { getEgresos, getEgresosByUser, createEgreso } from '../../controller/egresos.controller'

const router = express.Router()
router.get('/egresos/user/:id', auth.required, async function(req, res, next){
    const { id } = req.params
    const egresos = await getEgresosByUser(id)
    res.json(egresos)
});

router.get('/egresos', auth.required, async function(req, res, next){
    const egresos = await getEgresos()
    res.json(egresos)
});

router.post('/egresos', auth.required, async function(req, res, next){
    
    const egreso  = await createEgreso(req.body)
    res.json(egreso)
});

export default router;