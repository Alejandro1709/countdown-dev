import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewPage from './pages/NewPage'

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/countdowns/new' element={<NewPage />} />
            <Route path='/countdowns/:id' element={<DetailPage />} />
          </Routes>
        </main>
      </Container>
    </Fragment>
  )
}

export default App
