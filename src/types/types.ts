import { Request } from "express"
import { Document } from "mongoose"

export interface ILoginRequest extends Request {
  body: {
    email: string
    password: string
  }
}

export interface IRequestWithParams extends Request {
  params: {
    id: string
  }
}

export interface IUser {
  fullName: string
  birthDate: Date
  email: string
  password: string
  role: 'admin' | 'user'
  isActive: boolean
}

export interface IUserDoc extends Document, IUser {}

export interface ITokenPayload {
  id: string;
}