import React from 'react'

export default function Header() {
  return (
    <header className="header flex justify-between items-center p-4 my-6 bg-gray-100">
      <span>Left</span>
      <h2 className='text-2xl font-semibold'>Countdowns</h2>
      <span>Login</span>
    </header>
  )
}