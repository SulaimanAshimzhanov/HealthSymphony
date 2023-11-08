import React from "react";
import { useNavigate } from "react-router-dom";
import { Roads } from "../service/Path";


export const useRedirect = () => {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => navigate(Roads.AllPath.login), [navigate]);
  const goToHome = React.useCallback(() => navigate(Roads.LayoutPath.home), [navigate]);

  const goToCart = React.useCallback(() => navigate(Roads.LayoutPath.cart), [navigate]);


    return {
        actions: {
            goToLogin,
            goToHome,
            goToCart
        }
    }
};