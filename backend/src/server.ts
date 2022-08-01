import express, { Request, Response } from 'express'
import countdownRoutes from './routes/countdown.routes'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

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