import React, { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
import { Context } from '../Context'
import { getBusinessesFromYelpApi, getDetailsByIdFromYelpApi, getReivewsFromYelpApi } from './api/YelpAPI'

function App() {
  const ctx = useContext(Context)

  // TODO: Move a function calling to where a user clicks a search button
  useEffect(() => {
    getBusinessesFromYelpApi(ctx.location)
      .then(data => ctx.setApiData(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <p>{!ctx.apiData ? "Loading..." : ctx.apiData}</p>
      <Navbar />
      <PopUp />
      <Results />
      <Footer />
    </div>
  )
}

export default App
