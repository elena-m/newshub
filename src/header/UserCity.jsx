import React from 'react';

export default class UserCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
        this.cityChange = this.cityChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            city: localStorage.getItem('city') || ''
        });
    }

    cityChange(e) {
        this.setState({
            city: e.target.value
        });
        localStorage.city = e.target.value;
    }

    render() {
        return <input onChange={this.cityChange} value={this.state.city} type="text" name="city"/>;
    }
}