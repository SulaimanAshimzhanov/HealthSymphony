

import React from 'react';

import "../../styles/Loader.scss"

const Loader = ({fullHeight}) => {
  return (
    <div className="loader_container" style={{height: fullHeight}}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;
