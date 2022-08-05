import React, {useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import Countdown from '../types/countdown'
import axios from 'axios'

export default function DetailPage() {
  const [countdown, setCountdown] = useState<Countdown>()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const {id} = useParams()

  const handleGetCountdown = async (id: string) => {
    try {
      const {data} = await axios.get(`/api/v1/countdowns/${id}`)
      console.log(data)
      setCountdown(data)
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
      {countdown ? <Item item={countdown} isSelectable={false}/> : <p className='p-4 bg-red-300 text-white mb-2'>Countdown not found</p> }
      <div className="editable mt-6">
        <div className="flex flex-row justify-between gap-4">
          <button className='p-2 bg-blue-400 text-white w-full rounded-md hover:bg-blue-500' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='p-2 bg-red-400 text-white w-full rounded-md hover:bg-red-500'>Delete</button>
        </div>
        {isEditing ? (
          <Fragment>
            <form className='flex flex-col gap-4 mt-6'>
              <div className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input className="p-2 rounded-md border" name="title" type="text" id="title" placeholder={countdown?.title} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date">Date:</label>
                <input className="p-2 rounded-md border" name="toDate" type="date" id="date" value={countdown?.toDate} />
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