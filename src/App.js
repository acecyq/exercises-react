import React, { Component } from 'react';
import { Header, Footer } from './Layout/Index';
import Body from './Container/Body/Body';
import './App.css';

export default class extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
