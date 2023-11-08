

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Roads } from '../../service/Path';
import { LayoutPages } from '../Lazy';

const LayoutRoutes = () => {
  return (
    <React.Fragment>
        <Switch>
            <Route path={Roads.LayoutPath.home} element={<LayoutPages.Home/>}/>
            <Route path={Roads.LayoutPath.contact} element={<LayoutPages.Contact/>}/>
            <Route path={Roads.LayoutPath.about} element={<LayoutPages.About/>}/>
            <Route path={Roads.LayoutPath.services} element={<LayoutPages.Services/>}/>
            <Route path={Roads.LayoutPath.shop} element={<LayoutPages.Shop/>}/>
            <Route path={Roads.LayoutPath.cart} element={<LayoutPages.Cart/>}/>
        </Switch>
    </React.Fragment>
  )
}

export default LayoutRoutes;
