import React from 'react';
import Time from './Time';
import UserCity from './UserCity';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <a href="#">
                            <img src="#" alt="logo" width="auto" height="auto"/>
                        </a>
                    </li>
                    <li>
                        <Time />
                    </li>
                    <li>
                        <UserCity />
                    </li>
                    <li>
                        <a href="#">
                            Weather
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}