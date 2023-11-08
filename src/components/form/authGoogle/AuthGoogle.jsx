

import React from 'react';
import { HOOKS } from '../../../hooks';
import { Providers } from '../../../providers';
import { signInWithPopup } from 'firebase/auth';
import { auth, JoinWithGoogleProvider } from '../../../firebase/firebase';

import cls from "../../../styles/AuthGoogle.module.scss";


const AuthGoogle = () => {
    const { actions } = HOOKS.useRedirect();
    const { setRender } = Providers.useAuth();

    const handleGoogle = () => {
        signInWithPopup(auth, JoinWithGoogleProvider)
            .then(res => {
                localStorage.setItem("accessToken", res?.user.accessToken)
                actions.goToHome()
                setRender("Reload!");
            })
    };



  return (
    <React.Fragment>
        <div className={cls.goog}>
            <button onClick={handleGoogle} className={cls.google}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png' alt=''/>
            </button>
        </div>
    </React.Fragment>
  )
}

export default AuthGoogle;
