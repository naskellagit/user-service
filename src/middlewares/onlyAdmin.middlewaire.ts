import { Request, Response, NextFunction } from 'express'
import { ApiError } from './ApiError'
import { getRole } from '../modules/users/user.service'

export const onlyAdminMiddleware = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const role = await getRole(req.user!.id)
  if(role !== 'admin') {
    throw new ApiError('Недостаточно прав', 403)
  }
  next()
}