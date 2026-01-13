import app from './app'
import { connectDB } from './config/db'
import { env } from './config/env'

const startServer = async() => {
  try {
    await connectDB()
    app.listen(env.PORT, () => {
      console.log(`Сервер был успешно запущен на порту ${env.PORT}`)
    })
  } catch(err) {
    console.log(err)
  }
}

startServer()
