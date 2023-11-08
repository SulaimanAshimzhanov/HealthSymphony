

import React from 'react';

import cls from "../../../styles/AuthGit.module.scss";

const AuthGit = () => {
  return (
    <div className={cls.git}>
      <button className={cls.gitHub}>
        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''/>
      </button>
    </div>
  )
}

export default AuthGit;
