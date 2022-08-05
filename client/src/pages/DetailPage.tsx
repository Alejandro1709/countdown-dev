import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import Countdown from '../types/countdown'
import axios from 'axios'

export default function DetailPage() {
  const [countdown, setCountdown] = useState<Countdown>()

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
    <div>
      {countdown ? <Item item={countdown} isSelectable={false}/> : <p className='p-4 bg-red-300 text-white mb-2'>Countdown not found</p> }
    </div>
  )
}