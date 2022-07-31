import Countdown from './countdown'

export default interface User {
  id: number
  name: string
  email: string
  password: string
  countdowns?: Countdown[]
  createdAt?: Date
  updatedAt?: Date
}