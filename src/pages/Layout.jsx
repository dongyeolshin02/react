import React from 'react';
import MenuBar from '../features/components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSub from '../features/components/MenuSub';
import { Outlet } from 'react-router';
const Layout = () => {
    return (
        <div className='container'>
          <MenuBar/>
            <MenuSub/>
          <section>
            <Outlet/>
          </section>
        </div>
    );
};

export default Layout;