

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Roads } from '../../service/Path';
import { AuthPages } from '../Lazy';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={Roads.AuthPath.register} element={<AuthPages.Register/>}/>
        <Route path={Roads.AuthPath.login} element={<AuthPages.Login/>}/>
      </Switch>
    </React.Fragment>
  )
}

export default AuthRoutes;
