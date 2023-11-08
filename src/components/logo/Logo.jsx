

import React from 'react';
import { Link } from 'react-router-dom';
import { Roads } from '../../service/Path';

const Logo = () => 
    <Link to={Roads.LayoutPath.home}>
        <img src='https://uploads-ssl.webflow.com/5db9a6ed1744c7a1b2239493/6363e71046143a5ebac007fe_Vektor-Medical-logo-%C2%AE-TM-f.png' alt=''/>
    </Link>

export default Logo;
