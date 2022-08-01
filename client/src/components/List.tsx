import React from 'react'
import Item from './Item'
import NewItem from './NewItem'


function List() {
  return (
    <div className='flex flex-col gap-4'>
      <NewItem />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default List