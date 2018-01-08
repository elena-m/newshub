import React from 'react';
import axios from 'axios';
import './index.less';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: 'loading...',
            paragraphs: []
        };
    }

    componentDidMount() {
        axios.get('/api/paragraphs')
            .then((response) => {
                this.setState({
                    paragraphs: response.data
                });
            });
    }

    render() {
        const paragraphs = this.state.paragraphs;
        return (
            <div className="news">
                <div className="column1">
                    <img src="#" alt="ads" />
                </div>
                <div className="column2">
                    <h2>Headline</h2>
                    <img src="https://static.pexels.com/photos/247932/pexels-photo-247932.jpeg" alt="image" width="50%" />
                    <article>
                        {paragraphs.map((paragraph) => <p>{paragraph}</p>)}
                    </article>
                </div>
                <div className="column3">
                    <img src="#" alt="ads" />
                </div>
            </div>
        );
    }
}