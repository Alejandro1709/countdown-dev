import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import Countdown from '../types/countdown'
import { countDownFromDate } from '../utils/dateUtilities'
import 'moment-timezone'
import { Link } from 'react-router-dom'

type ItemProps = {
  item: Countdown
}

function Item({ item }: ItemProps) {

  const [currentDayCount, setCurrentDayCount] = useState<number>(0)

  useEffect(() => {
    const result: number = countDownFromDate(item.toDate)
    setCurrentDayCount(result)
  }, [])
  
  return (
    <Link to={`/countdowns/${item._id}`}>
      <div className='flex justify-between bg-red-400 cursor-pointer hover:shadow-xl transition-all select-none'>
        <div className='p-3 ml-2'>
          <div className="flex items-center gap-4">
            <h1 className='text-3xl'>🤯</h1>
            <div className=''>
              <h2 className='text-1xl font-bold text-white'>{item.title}</h2>
              <p className='font-semibold text-gray-300'>
                <Moment format='LLLL'>{item.toDate}</Moment>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-red-500 p-2'>
          <h3 className='text-2xl font-semibold text-white'>{currentDayCount < 0 ? Math.abs(currentDayCount) : currentDayCount}</h3>
          <p className='text-sm text-white'>{currentDayCount < 0 ? 'days ago' : 'days left'}</p>
        </div>
      </div>
    </Link>
  )
}

export default Item