import User from './user'

export default interface Countdown {
  _id: string
  title: string
  toDate: string
  isCompleted?: boolean
  author: User
  createdAt?: Date
  updatedAt?: Date
}