import React, { Component } from 'react';
import { Header, Footer } from './Layout/Index';
import './App.css';

export default class extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}
