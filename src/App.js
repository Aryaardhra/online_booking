import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import List from './components/pages/list/List'
import Hotel from './components/pages/hotel/Hotel'
import { SearchContextProvider } from './context/SearchContext'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import LandingPage from "./components/admin/pages/landingPage/LandingPage"
import AdminLogin from "./components/admin/pages/login/AdminLogin"
import AdminList from './components/admin/pages/list/AdminList'
import Single from './components/admin/pages/single/Single'
import New from './components/admin/pages/new/New'
import { productInputs, userInputs } from './components/admin/components/formdata'
import "./components/admin/style/style.scss"
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {

  const { darkMode }= useContext(DarkModeContext);

  return (
    <>
    <div className= { darkMode ? " app dark " : " app" }>
    <AuthContextProvider>
    <SearchContextProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotel />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/adminlanding" element={<LandingPage />} />
    <Route path="/adminlongin" element={< AdminLogin/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/users" >
      <Route index element = {<AdminList />}/>
      <Route path=":userId" element={<Single />} />
      <Route path="new" element={<New inputs= {userInputs} title = "Add New User"/>} />
    </Route>
    <Route path="products">
    <Route index element = {<AdminList />}/>
      <Route path=":productId" element={<Single />} />
      <Route path="new" element={<New  inputs = { productInputs} title = "Add New Products"/>} />
    </Route>
    </Routes>
    </SearchContextProvider>
    </AuthContextProvider>
    </div>
    </>
  )
}

export default App;