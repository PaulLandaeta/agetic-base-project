import Categoria from '../models/categoria'

export const getCategorias = async () => {
    const categorias = await Categoria.findAll()
    return categorias
}

export const createCategoria = async ( categoria ) => {
    return await Categoria.create(categoria)
}