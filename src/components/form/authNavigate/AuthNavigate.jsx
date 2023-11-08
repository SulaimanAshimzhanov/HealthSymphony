

import React from 'react';
import { Link } from 'react-router-dom';
import { Roads } from '../../../service/Path';

const AuthNavigate = ({location}) => {
  return (
    <Link
        style={{color: "white"}}
        to={
            location === "signup"
                ? Roads.AllPath.login
                : Roads.AllPath.register
        }
    >
      {
        location === "signup"
            ? "Already have an account!"
            : "You don't have an account!"
      }
    </Link>
  )
}

export default AuthNavigate;
