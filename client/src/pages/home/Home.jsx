import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
       {/* <Featured/>*/}
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
      
    </div>
  )
}
