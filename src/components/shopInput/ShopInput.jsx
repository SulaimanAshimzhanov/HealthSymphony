import React from 'react'

const ShopInput = ({searchValue, setSearchValue}) => {
  return (
    <input 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type='text'
        placeholder='Search...'
    />
  )
}

export default ShopInput
