import React from 'react'
import { Link } from 'react-router-dom'

function NewPage() {
  return (
    <div className='px-2'>
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input className="p-2 rounded-md border" type="text" id="title" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date:</label>
          <input className="p-2 rounded-md border" type="date" id="date" />
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