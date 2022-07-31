import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import Countdown from '../types/countdown'
import User from '../types/user'

const PATH: string = path.join(__dirname.replace('controllers', 'data'), '/countdowns.json')

const jsonFile = fs.readFileSync(PATH, { encoding: 'utf-8' })

const countdowns: Array<Countdown> = JSON.parse(jsonFile)

export const handleGetCountdowns = async (req: Request, res: Response) => {
  res.status(200).json(countdowns)
}

export const handleGetSingleCountdown = async (req: Request, res: Response) => {
  const foundCountdown = countdowns.find((c) => c.id === parseInt(req.params.id))

  res.status(200).json(foundCountdown)
}

export const handleCreateCountdown = async (req: Request, res: Response) => {
  const { title, toDate } = req.body

  const dummyAuthor: User = {
    id: countdowns[countdowns.length - 1].id + 1,
    name: 'Alejandro',
    email: 'alelarosa99@gmail.com',
    password: '1234567'
  }

  const newCountdown: Countdown = {
    id: countdowns.length + 1,
    title,
    toDate,
    author: dummyAuthor
  }

  const newList = [...countdowns, newCountdown]

  const data = fs.writeFileSync(PATH, JSON.stringify(newList), { encoding: 'utf-8' })

  res.status(201).json({message: 'Countdown Created!'})
}