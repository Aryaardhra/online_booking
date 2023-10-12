import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import List from './components/pages/list/List'
import Hotel from './components/pages/hotel/Hotel'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
    </>
  )
}

export default App;