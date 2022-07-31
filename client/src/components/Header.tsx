import React from 'react'

export default function Header() {
  return (
    <header className="header flex justify-between items-center p-4 my-6 bg-red-400 text-white shadow-md select-none">
      <span>Left</span>
      <h2 className='text-2xl font-semibold'>Countdowns</h2>
      <span>Login</span>
    </header>
  )
}