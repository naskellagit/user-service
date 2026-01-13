import { Request, Response } from "express"
import * as service from './user.service'
import { ApiError } from "../../middlewares/ApiError"
import { IRequestWithParams } from "../../types/types"

export const getAll = async(req: Request, res: Response) => {
  const users = await service.findAll()
  res.json(users)
}

export const getById = async(req: IRequestWithParams, res: Response) => {
  const role = await service.getRole(req.user!.id)
  if(role !== 'admin' && req.user?.id !== req.params.id) {
    throw new ApiError('Недостаточно прав', 403)
  }
  const user = await service.findById(req.params.id)
  res.json(user)
}

export const userBlock = async(req: IRequestWithParams, res: Response) => {
  const id = req.params.id
  const role = await service.getRole(req.user!.id)
  if(role !== 'admin' && req.user?.id !== id) {
    throw new ApiError('Недостаточно прав', 403)
  }
  await service.blockUser(id)
  res.json({ message: `Пользователь с id ${id} был заблокирован!` })
}