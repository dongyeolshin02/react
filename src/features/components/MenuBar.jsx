import React from 'react';
import menuCss from '../../assets/css/menu/menubar.module.css';
import { NavLink } from 'react-router';
import { authStore } from '../../sotre/authStore';
const MenuBar = () => {
    const isAuthenticated = authStore((s)=> s.isAuthenticated);
    const userName = authStore((s)=> s.userName);
    return (
        <nav>
          <div  className={menuCss.top}>
            <div className={menuCss.topLeft}></div>
            <div className={menuCss.topRight}>
                <ul className={menuCss.info}>
                    { !isAuthenticated() && (
                    <>
                        <li>
                            <NavLink to='/join'>회원가입</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>로그인</NavLink>
                        </li>
                    </>
                    )
                }          
                { isAuthenticated() && (
                    <>
                        <li>
                            {`${userName} 님 환영합니다`}
                        </li>
                        <li>
                            <NavLink to='/user/mypage'>마이페이지</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>로그아웃</NavLink>
                        </li>
                    </>
                    )
                }          
                </ul>
            </div>
          </div>
          <div className={menuCss.search}>
            <div className={menuCss.logo}>
                <span>도서스토리</span>
            </div>
            <div>
                <input type='text' className='form-control'></input>
            </div>
            <div>
                <button type='button' className='btn btn-success'>도서 검색</button>
            </div>
          </div>
        </nav>
    );
};

export default MenuBar;