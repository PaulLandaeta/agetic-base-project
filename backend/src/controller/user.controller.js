import User from '../models/user'

export const getUser = async (username) => {
    const user = await User.findOne({
        where: {
            username
        }
    })
    return user
}