import express, { Request, Response } from 'express'
import countdownRoutes from './routes/countdown.routes'
import connectDb from './db/connectDb'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.NODE_ENV == 'development' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD

connectDb(uri)

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Routes
app.use('/api/v1/countdowns', countdownRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello API')
})

// Error Handling

// Server Listening

const PORT = process.env.PORT || 2023

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`))