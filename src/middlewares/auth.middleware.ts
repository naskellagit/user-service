import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'
import { ApiError } from './ApiError'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) throw new ApiError('Неавторизован', 401)
  try {
    req.user = verifyToken(token)
    next()
  } catch {
    throw new ApiError('Невалидный токен', 401)
  }
}