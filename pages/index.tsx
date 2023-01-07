import { FeatureDetails, Features, Hero, NavBar, WhyLazyweb } from 'components'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Features/>
      <WhyLazyweb/>
      <FeatureDetails/>
    </div>
  )
}

export default Home