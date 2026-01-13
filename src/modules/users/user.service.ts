import { ApiError } from "../../middlewares/ApiError"
import { User } from "./user.model"

export const findById = async(id: string) => {
  const user = await User.findById(id, {password: 0})
  return user
}

export const findAll = async() => {
  const users = await User.find({}, {password: 0})
  return users
}

export const getRole = async(id: string) => {
  const user = await User.findById(id, {role: 1})
  const role = user?.role
  return role
}

export const blockUser = async(id: string) => {
  const user = await User.findByIdAndUpdate(id, {isActive: false})
  if(!user) throw new ApiError('Пользователь не был найден', 404)
}