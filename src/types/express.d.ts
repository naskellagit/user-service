import { ITokenPayload } from "./types" 

declare global {
  namespace Express {
    interface Request {
      user?: ITokenPayload
    }
  }
}

export {}