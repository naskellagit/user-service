/// <reference path="./types/express.d.ts" />

import express, { json } from 'express'
import authRoutes from './modules/auth/auth.routes'
import userRoutes from './modules/users/user.routes'
import { errorMiddleware } from './middlewares/error.middlewaire'

const app = express()

app.use(json())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)

app.use(errorMiddleware)

export default app