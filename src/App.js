import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import List from './components/pages/list/List'
import Hotel from './components/pages/hotel/Hotel'
import { SearchContextProvider } from './context/SearchContext'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'

const App = () => {
  return (
    <>
    <AuthContextProvider>
    <SearchContextProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotel />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    </SearchContextProvider>
    </AuthContextProvider>
    </>
  )
}

export default App;