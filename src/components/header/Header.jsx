

import React from 'react';
import { Components } from '..';

import cls from "../../styles/Header.module.scss";
import { LIST } from '../../utils/List';
import { Link, NavLink } from 'react-router-dom';
import { Providers } from '../../providers';
import { ICONS } from '../../icons/icons';

const Header = () => {
    const { user, token, signOut } = Providers.useAuth();


  return (
    <React.Fragment>
      <Components.Container>
        <header>
            <section className={cls.header_side}>
                <Components.Logo/>

                <aside className={cls.header_side_lists}>
                    <ul>
                        {
                            LIST.HeaderLists.map(item => (
                                <li key={item.id}>
                                    <NavLink to={item.route}>
                                        {item.caption}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </aside>
                    
                <aside className={cls.header_side_icon}>
                    {
                        (user && token)
                            ? <div className={cls.icon_row}>
                                {
                                    LIST.HeaderIcons.map(item => (
                                        <p key={item.id}>
                                            <Link to={item.route}>
                                                {item.icon && <item.icon/>}
                                            </Link>
                                            <ICONS.VscSignOut onClick={signOut}/>
                                        </p>
                                    ))
                                }
                              </div>
                            : <div className={cls.button_row}>
                                {
                                    LIST.SignInandSignOut.map(item => (
                                        <button key={item.id}>
                                            <Link to={item.route}>
                                                {item.caption}
                                            </Link>
                                        </button>
                                    ))
                                }
                             </div>
                    }
                    <div className={cls.icons}>
                        {
                            (user && token)
                                ? <Components.Avatar
                                    avatar={user?.avatar}
                                    w={"25px"}
                                    h={"25px"}
                                 />
                                : <Components.Avatar
                                    w={"25px"}
                                    h={"25px"}
                                 />
                        }
                    </div>
                </aside>
            </section>
        </header>
      </Components.Container>
    </React.Fragment>
  )
}

export default Header;


