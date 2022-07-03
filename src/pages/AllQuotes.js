import React, { useEffect } from 'react'
import QuotesList from '../components/quotes/QuotesList'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/requests'
import classes from './AllQuotes.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Loader from '../components/UI/Loader'

function sortQuotes(quotes, ascending) {
  quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    }
    else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

export default function AllQuotes() {
  const { sendRequest, data: loadedData, loading } = useHttp(getAllQuotes, true)

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const ascending = queryParams.get('sort') === 'asc'
  // console.log(ascending, 6)

  if (loadedData) {
    sortQuotes(loadedData, ascending)
  }

  function sortHandler() {
    navigate(`${location.pathname}?sort=${ascending ? 'dsc': 'asc'}`)
  }

  useEffect(() => {
    sendRequest()
  }, [])

  console.log(loadedData)
  if (loading === 'pending') {
    return <div className={classes.center}><Loader /></div>
  }
  return (
    <div className={classes.container}>
      {/* <div className={classes.center}><Loader /></div> */}
      <button className={classes.btn} onClick={sortHandler}>Sort {`${ascending ? "Ascending" : "Decending"}`}</button>
      <div className={classes.filler}></div>
      <ul className={classes.lists}>
        {loadedData.map((data, id) => <QuotesList key={id} text={data.text} author={data.author} id={data.id} />)}
      </ul>
    </div>
  )
}
