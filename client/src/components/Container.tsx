import React from 'react'

type ContainerProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='mx-6'>
      {children}
    </div>
  )
}