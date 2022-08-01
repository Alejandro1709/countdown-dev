import React from 'react'
import { Link } from 'react-router-dom'

function NewItem() {
  return (
    <Link to="/countdowns/new">
      <div className='flex justify-between bg-red-400 select-none'>
        <div className='p-3 ml-2'>
          <div className="flex items-center gap-4">
            <p className='text-2xl text-white'>New Countdown</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-red-500 p-2'>
          <h3 className='text-2xl font-semibold text-white'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default NewItem