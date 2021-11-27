import React, { Component } from 'react';
import Footer from '../components/header/footer/footer';
import Header from '../components/header/header';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        );
    }
}

export default Layout;
