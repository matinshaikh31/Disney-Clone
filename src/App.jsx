import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Header } from './components'
import SLider from './components/SLider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'




const App = () => {
  return (
    <>
      <Header/>
      <SLider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </>
  )
}

export default App