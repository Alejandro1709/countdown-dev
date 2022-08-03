import React from 'react'
import Countdown from '../types/countdown'
import Item from './Item'
import NewItem from './NewItem'

type ListProps = {
  data: Countdown[]
}

function List({ data }: ListProps) {
  return (
    <div className='flex flex-col gap-4'>
      <NewItem />
      {data.map((obj) => (
        <Item key={obj._id} item={obj} />
      ))}
    </div>
  )
}

export default List