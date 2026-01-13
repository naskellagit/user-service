import { User} from '../users/user.model'
import { hashPassword, comparePassword } from '../../utils/hash'
import { signToken } from '../../utils/jwt'
import { ApiError } from '../../middlewares/ApiError'
import { IUser } from '../../types/types'

enum ErrorEnum {
  existsError,
  notFoundError
}
const errorFunction = (error: ErrorEnum) => {
  if(error === ErrorEnum.existsError) throw new ApiError('Пользователь с таким email уже существует!', 409)
  if(error === ErrorEnum.notFoundError) throw new ApiError('Неверный логин или пароль!', 401)
}

export const register = async(data: IUser) => {
  const exists = await User.findOne({email: data.email})
  if(exists) {
    errorFunction(ErrorEnum.existsError)
  }

  const user  = await User.create({
    ...data,
    password: await hashPassword(data.password)
  })
  const {password, ...userToSend} = user.toObject()
  return userToSend
}

export const login = async(email: string, password: string) => {
  const user = await User.findOne({ email})
  if(!user || !user.isActive) {
    errorFunction(ErrorEnum.notFoundError)
    return
  }

  const validPass = await comparePassword(password, user.password)
  if(!validPass) {
   errorFunction(ErrorEnum.notFoundError)
   return
  }
  return { token: signToken({ id: user.id }) }
}