

import React from 'react';

import cls from "../../../styles/AuthFace.module.scss";

const AuthFacebook = () => {
  return (
    <div className={cls.face}>
      <button className={cls.facebook}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png' alt=''/>
      </button>
    </div>
  )
}

export default AuthFacebook;
