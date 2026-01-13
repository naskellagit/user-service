import jwt from "jsonwebtoken"
import { env } from "../config/env"
import { ITokenPayload } from "../types/types"

export const signToken = (payload: ITokenPayload) => {
  return jwt.sign(payload, env.JWT_SECRET, {expiresIn: '7d'})
}

export const verifyToken = (token: string): ITokenPayload => {
  return jwt.verify(token, env.JWT_SECRET) as ITokenPayload
}