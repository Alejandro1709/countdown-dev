import React from 'react'
import List from '../components/List'
import Countdown from '../types/countdown'

const countdowns: Countdown[] = [
  {
    id: 1,
    title: 'Birthday Party',
    toDate: '2022-17-09',
    author: {
      id: 1,
      name: 'Alejandro',
      email: 'alelarosa99@gmail.com',
      password: '123456'
    }
  }
]
function HomePage() {
  return (
    <section>
      <List data={countdowns}/>
    </section>
  )
}

export default HomePage