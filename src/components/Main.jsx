import React from 'react'
import Slider from './Slider'
import Search from './Search'
import Recipes from './Recipes'

function Main (props) {
  return (
    <div>
      <Slider />
      <Search />
      <Recipes />
    </div>
  )
}

export default Main