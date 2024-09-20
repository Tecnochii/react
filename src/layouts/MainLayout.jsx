import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function MainLayout() {
  return (
    <div>
      
    <Header >
         <Nav/>
    </Header>

        <Outlet/>

    <Footer/>

    </div>
  )
}

export default MainLayout
