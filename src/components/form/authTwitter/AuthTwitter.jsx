

import React from 'react';

import cls from "../../../styles/AuthTwitter.module.scss";

const AuthTwitter = () => {
  return (
    <div className={cls.twit}>
      <button className={cls.twitter}>
        <img src='https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png' alt=''/>
      </button>
    </div>
  )
}

export default AuthTwitter;
