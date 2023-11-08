

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Routers } from '../pages';
import { Roads } from '../service/Path';
import { Components } from '../components';

const Routes = () => {
  return (
    <React.Fragment>
      <Components.Header/>
      <React.Suspense fallback={<Components.Loader fullHeight={"50vh"}/>}>
        <Switch>
          <Route path={Roads.MainPath.layout} element={<Routers.LayoutRoutes/>}/>
          <Route path={Roads.MainPath.auth} element={<Routers.AuthRoutes/>}/>
        </Switch>
      </React.Suspense> 
      <Components.Footer/>
    </React.Fragment>
  )
}

export default Routes;
