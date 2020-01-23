import User from '../models/user'

export const getUser = async (username) => {
    const user = await User.findOne({
        where: {
            username
        }
    })
    return user
}

export const updateUserToken = async (user) => {
    const { id } = user
    const currentUser = await User.findOne(id)
    currentUser.token = user.token
    await currentUser.save()
}
