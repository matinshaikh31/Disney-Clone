import React from 'react'
import { Header } from './components'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'




const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </>
  )
}

export default App