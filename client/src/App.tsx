import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </Container>
    </Fragment>
  )
}

export default App
