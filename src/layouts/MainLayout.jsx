import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
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
