"use client"

import { useState } from 'react'
import SearchStock from './search-stock'

const SearchBar = () => {
  const [ticker,setTicker] = useState('');

  const handleSearch = () => {

  }
  return (
    <form 
      onSubmit={handleSearch}
    >
      <div>
        <SearchStock
          ticker={ticker}
          setTicker={setTicker}
        />
      </div>
    </form>
  )
}

export default SearchBar