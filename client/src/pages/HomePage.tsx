import React, {useState, useEffect} from 'react'
import List from '../components/List'
import Countdown from '../types/countdown'
import axios from 'axios'

function HomePage() {
  const [data, setData] = useState<Countdown[]>([])

  const getCountdowns = async () => {
    try {
      const { data } = await axios.get('/api/v1/countdowns')

      setData(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCountdowns()

    return () => {
      setData([])
    }
  }, [])

  return (
    <section>
      <List data={data}/>
    </section>
  )
}

export default HomePage