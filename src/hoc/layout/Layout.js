import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => (

    <React.Fragment>
        <Header/>
        <div className='mb-auto'>
            {props.children}
        </div>
        <Footer/>
    </React.Fragment>
);

export default Layout;