import React, { Component } from 'react';
import Header from '../Component/Header.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                { /* 應用程式最外層的元件  */}
                { /* 把固定的版面放這裡  */}
				<Header />
                { this.props.children }
            </div>
        );
    }
}
