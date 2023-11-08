

import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { HOOKS } from '../hooks';


const AuthProvider = ({children}) => {
  const { actions } = HOOKS.useRedirect();
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [render, setRender] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");

    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(null)
    }
  }, []);


  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth, res => {
      setUser({
        displayName: res?.displayName,
        email: res?.email,
        avatar: res?.photoURL
      })
    })
  }, []);


  const signOut = React.useCallback(() => {
    localStorage.clear();
    setUser(null);
    setToken(null);
    setRender("Exit!");
    actions.goToLogin();
  }, [actions]);


  React.useEffect(() => {
    getToken()
    getUser()
  }, [getToken, getUser, render]);

  


  const values = React.useMemo(() => ({
    token, 
    user,
    setRender,
    signOut,
    cartItems,
    setCartItems
  }), 
    [
      token,
      user,
      setRender,
      signOut,
      cartItems,
      setCartItems
    ]
  );



    
  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default AuthProvider;
