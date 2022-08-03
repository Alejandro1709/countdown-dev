import mongoose, { Schema } from 'mongoose'
import User from '../types/user'

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  countdowns: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Countdown'
    }
  ]
}, {
  timestamps: true
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel