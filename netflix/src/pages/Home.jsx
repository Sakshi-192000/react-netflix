import React from 'react'
import MovieHero from '../components/MovieHero'
import MovieRow from '../components/MovieRow'
import endpoints from '../services/MovieServices'

const Home = () => {
  return (
    <div>
      <MovieHero/>
      <MovieRow title={'upcoming'} url={endpoints.upcoming}/>
      <MovieRow title={'trending'} url={endpoints.trending}/>
      <MovieRow title={'top rated'} url={endpoints.topRated}/>
      <MovieRow title={'popular'} url={endpoints.popular}/>
    </div>
  )
}

export default Home