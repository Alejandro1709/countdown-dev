import User from './user'

export default interface Countdown {
  id: string
  title: string
  toDate: Date
  isCompleted?: boolean
  author: User
  createdAt?: Date
  updatedAt?: Date
}