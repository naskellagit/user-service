import { Request, Response, NextFunction } from "express"
import { ApiError } from "./ApiError"

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {

  if(error instanceof ApiError) {
    return res.status(error.statusCode).json({error: true, message: error.message})
  }

  return res.status(500).json({ error: true, message: 'Ошибка сервера' })
}