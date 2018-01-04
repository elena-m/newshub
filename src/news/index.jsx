import React from 'react';
import './index.less';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: 'loading...'
        };

    }

    componentDidMount() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.setState({
                    article: xhttp.responseText
                });
            }
        }.bind(this);
        xhttp.open("GET", "paragraphs.html", true);
        xhttp.send();
    }
    
    render() {
        return (
            <div className="news">
                <div className="column1">
                    <img src="#" alt="ads" />
                </div>
                <div className="column2">
                    <h2>Headline</h2>
                    <img src="https://static.pexels.com/photos/247932/pexels-photo-247932.jpeg" alt="image" width="50%" />
                    <article dangerouslySetInnerHTML={{__html: this.state.article}}>
                    </article>
                </div>
                <div className="column3">
                    <img src="#" alt="ads" />
                </div>
            </div>
        );
    }
}