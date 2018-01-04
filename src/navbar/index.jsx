import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="#">Politics</a>
                <a href="#">Sport</a>
                <a href="#">World</a>
                <a href="#">Criminal</a>
                <a href="#">Stories</a>
                <a href="#">Tech</a>
            </div>
        );
    }
}