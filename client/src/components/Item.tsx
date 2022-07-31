import React from 'react'

function Item() {
  return (
    <div className='flex justify-between bg-red-400 cursor-pointer hover:shadow-xl transition-all select-none'>
      <div className='p-3 ml-2'>
        <div className="flex items-center gap-4">
          <h1 className='text-3xl'>🤯</h1>
          <div className=''>
            <h2 className='text-1xl font-bold text-white'>Trip to California</h2>
            <p className='font-semibold text-gray-300'>September 17, 2022</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-red-500 p-2'>
        <h3 className='text-2xl font-semibold text-white'>10</h3>
        <p className='text-sm text-white'>days left</p>
      </div>
    </div>
  )
}

export default Item