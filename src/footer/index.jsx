import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><i className="fa fa-copyright" aria-hidden="true"></i> Newshub</li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow us on Instagram</a></li>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> Follow us on Facebook</a></li>
                    <li><a href="#"><i className="fa fa-vk" aria-hidden="true"></i> Follow us on VK</a></li>
                    <li id="year">2017</li>
                </ul>
            </div>
        );
    }
}