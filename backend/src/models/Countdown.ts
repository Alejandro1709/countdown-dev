import mongoose, { Schema } from 'mongoose'
import Countdown from '../types/countdown'

const countdownSchema = new Schema<Countdown>({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 4
  },
  toDate: {
    type: Date,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const CountdownModel = mongoose.model('Countdown', countdownSchema)

export default CountdownModel