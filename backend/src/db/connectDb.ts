import mongoose from 'mongoose'

export default async (uri: string | undefined) => {
  try {
    await mongoose.connect(uri ?? '')
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}