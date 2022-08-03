import { Request, Response } from 'express'
import CountdownModel from '../models/Countdown'
import Countdown from '../types/countdown'

export const handleGetCountdowns = async (req: Request, res: Response) => {
  try {
    const countdowns: Array<Countdown> = await CountdownModel.find()
    res.status(200).json(countdowns)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export const handleGetSingleCountdown = async (req: Request, res: Response) => {
  try {
    const countdown = await CountdownModel.findById(req.params.id)

    if (!countdown) {
      return res.status(404).json({ message: 'Countdown does not exists' })
    }

    res.status(200).json(countdown)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export const handleCreateCountdown = async (req: Request, res: Response) => {
  const { title, toDate } = req.body

  try {
    const countdown = await CountdownModel.create({ title, toDate })

    res.status(201).json(countdown)

  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}