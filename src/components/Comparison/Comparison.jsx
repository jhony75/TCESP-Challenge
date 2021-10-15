import React from 'react';
import Search from '../Search/Search'
import './comparison.css'

const Comparison = () => {
  return(
    <div className="gridWrapper">
      <div className="leftSide">
        <Search />
      </div>
      <div className="rightSide">
        <Search />
      </div>
    </div>
  )
}

export default Comparison