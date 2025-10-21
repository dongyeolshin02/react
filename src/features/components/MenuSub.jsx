import React from 'react';
import style from '../../assets/css/menu/menubar-sub.module.css'
import { NavLink } from 'react-router';
const MenuSub = () => {
    return (
        <div className={style.menuSub}>
            <nav>
                <ul  className={style.menuList}>
                    <li>
                      <NavLink to={'/books/best'} className={({ isActive }) => isActive ? style.active : ""}>베스트</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/books/new'} className={({ isActive }) => isActive ? style.active : ""}>신상품</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/books/hot'} className={({ isActive }) => isActive ? style.active : ""}>화제의 도서</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuSub;