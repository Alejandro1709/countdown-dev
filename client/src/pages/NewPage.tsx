import React, { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewPage() {
  const [title, setTitle] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || !toDate) {
      setMessage('Please fill out the fields')
      return
    }

    setIsLoading(true)

    try {
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const { data } = await axios.post('/api/v1/countdowns', { title, toDate }, config)

      setMessage(data.message)

      setIsLoading(false)

      navigate('/')

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='px-2'>
      {isLoading && <p className='p-4 bg-blue-300 text-white mb-2'>Loading...</p>}
      {message &&  <p className='p-4 bg-blue-300 text-white mb-2'>{message}</p>}
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input className="p-2 rounded-md border" name="title" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date:</label>
          <input className="p-2 rounded-md border" name="toDate" type="date" id="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
        <button className='text-white bg-blue-400 p-2 rounded-md hover:bg-blue-500' type='submit'>Create</button>
      </form>
      <p className='bg-gray-300 p-2 text-center rounded-md hover:bg-gray-400 w-full mt-2 cursor-pointer'>
        <Link to="/">Cancel</Link>
      </p>
    </div>
  )
}

export default NewPage