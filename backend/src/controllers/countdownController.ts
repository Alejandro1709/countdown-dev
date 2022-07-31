import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import Countdown from '../types/countdown'

const jsonFile = fs.readFileSync(path.join(__dirname.replace('controllers', 'data'), '/countdowns.json'), { encoding: 'utf-8' })

const countdowns: Array<Countdown> = JSON.parse(jsonFile)

export const handleGetCountdowns = async (req: Request, res: Response) => {
  res.status(200).json(countdowns)
}

export const handleGetSingleCountdown = async (req: Request, res: Response) => {
  const foundCountdown = countdowns.find((c) => c.id === req.params.id)

  res.status(200).json(foundCountdown)
}