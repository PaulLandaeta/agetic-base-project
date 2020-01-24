
import express from  'express'
import auth from  '../auth'
import { getCategorias, createCategoria } from '../../controller/categorias.controller'


const router = express.Router()

router.get('/categorias', auth.required, async function(req, res, next){
    const categorias = await getCategorias()
    res.json(categorias)
});

router.post('/categorias', auth.required, async function(req, res, next){
    
    const categorias  = await createCategoria(req.body)
    res.json(categorias)
});

export default router;