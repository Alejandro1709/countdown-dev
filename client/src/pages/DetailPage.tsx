import React, {useState, useEffect, Fragment, FormEvent} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Item from '../components/Item'
import Countdown from '../types/countdown'
import axios from 'axios'

export default function DetailPage() {
  const [title, setTitle] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')
  const [countdown, setCountdown] = useState<Countdown>()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const {id} = useParams()

  const navigate = useNavigate()

  const handleGetCountdown = async (id: string) => {
    try {
      const {data} = await axios.get(`/api/v1/countdowns/${id}`)
      console.log(data)
      setCountdown(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateCountdown = async (e: FormEvent<HTMLFormElement>) => {
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

      const { data } = await axios.patch(`/api/v1/countdowns/${id}`, { title, toDate }, config)
      console.log(data)

      setIsLoading(false)

      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      handleGetCountdown(id)
    }
  }, [id])
  

  return (
    <Fragment>
      {isLoading && <p className='p-4 bg-blue-300 text-white mb-2'>Loading...</p>}
      {message &&  <p className='p-4 bg-blue-300 text-white mb-2'>{message}</p>}
      {countdown ? <Item item={countdown} isSelectable={false}/> : <p className='p-4 bg-red-300 text-white mb-2'>Countdown not found</p> }
      <div className="editable mt-6">
        <div className="flex flex-row justify-between gap-4">
          <button className='p-2 bg-blue-400 text-white w-full rounded-md hover:bg-blue-500' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='p-2 bg-red-400 text-white w-full rounded-md hover:bg-red-500'>Delete</button>
        </div>
        {isEditing ? (
          <Fragment>
            <form className='flex flex-col gap-4 mt-6' onSubmit={handleUpdateCountdown}>
              <div className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input className="p-2 rounded-md border" name="title" type="text" id="title"
                  placeholder={countdown?.title} value={title}
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Date:</label>
                <input className="p-2 rounded-md border" name="toDate" type="date" id="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)} />
              </div>
              <button className='text-white bg-blue-400 p-2 rounded-md hover:bg-blue-500' type='submit'>Update</button>
            </form>
            <button className='bg-gray-300 p-2 text-center rounded-md hover:bg-gray-400 w-full mt-2 cursor-pointer' onClick={() => setIsEditing(false)}>
            Cancel
            </button>
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  )
}