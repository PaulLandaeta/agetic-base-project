import Egreso from '../models/egresos'

export const getEgresos = async () => {
    const egresos = await Egreso.findAll()
    return egresos
}

export const createEgreso = async ( egreso ) => {
    return await Egreso.create(egreso)
}

export const getEgresosByUser = async (userId) => {
    const egresos = await Egreso.findAll({
        where: {
         userId,
        }
      })
    return egresos
}