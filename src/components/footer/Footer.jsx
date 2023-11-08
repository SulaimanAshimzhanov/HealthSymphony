

import React from 'react';

import { Components } from '..';
import { LIST } from '../../utils/List';
import { Link } from 'react-router-dom';

import cls from "../../styles/Footer.module.scss";


const Footer = () => {
  return (
    <footer>
        <div>
            <Components.Container>
                <div className={cls.footer}>
                    <ul>
                        <h2>About Company</h2>
                        {
                            LIST.aboutCompany.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>Work Company</h2>
                        {
                            LIST.workCompany.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>Pacients</h2>
                        {
                            LIST.helpPaciets.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>Contacts</h2>
                        {
                            LIST.socielNet.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Components.Container>
        </div>
    </footer>
  )
}

export default Footer;
