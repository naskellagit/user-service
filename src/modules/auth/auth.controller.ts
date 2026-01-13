import { Request, Response } from "express"
import * as service from './auth.service'
import { ILoginRequest } from "../../types/types"

export const register = async(req: Request, res: Response) => {
  const user = await service.register(req.body)
  res.status(201).json(user)
}

export const login = async(req: ILoginRequest, res: Response) => {
  const token = await service.login(req.body.email, req.body.password)
  res.json(token)
}