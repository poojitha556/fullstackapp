import React, { Children } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
        </div>
    );
};

export default Layout;