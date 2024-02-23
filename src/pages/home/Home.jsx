import React from 'react'
import "./home.scss"
import HeroElement from './heroElement/HeroElement'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './top-rated/TopRated'

const Home = () => {
  return (
    <div className="homepage">
      <HeroElement />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home