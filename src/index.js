import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Navbar from './navbar';
import News from './news';
import Footer from './footer';
import './index.less';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Navbar />
                <News />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);