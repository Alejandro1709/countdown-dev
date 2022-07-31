import React from 'react'
import Item from './Item'


function List() {
  return (
    <div className='flex flex-col gap-4'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default List