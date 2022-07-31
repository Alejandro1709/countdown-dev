import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      {/* App Container */}
      <div className='mx-12'>
        <header className="header flex justify-between items-center p-4 my-6 bg-gray-100">
          <span>Left</span>
          <h2 className='text-2xl font-semibold'>Countdowns</h2>
          <span>Login</span>
        </header>
      </div>
    </Fragment>
  )
}

export default App
