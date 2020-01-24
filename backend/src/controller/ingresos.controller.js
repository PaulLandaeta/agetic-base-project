import Ingreso from '../models/ingresos'

export const getIngresos = async () => {
    const ingresos = await Ingreso.findAll()
    return ingresos
}

export const createIngreso = async ( ingreso ) => {
    return await Ingreso.create(ingreso)
}

export const deleteIngreso = async (id) => {
    const ingreso = await Ingreso.find(id)
    await ingreso.destroy();
}

export const getIngresosByUser = async (userId) => {
    const ingresos = await Ingreso.findAll({
        where: {
         userId,
        }
      })
    return ingresos
}