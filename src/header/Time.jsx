import React from 'react';

export default class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.getTime()
        };
        this.setTime = this.setTime.bind(this);
    }
    
    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTime() {
        let currentDate = new Date();
        let currentHour = currentDate.getHours();
        let currentMinute = currentDate.getMinutes();
        let currentSecond = currentDate.getSeconds();

        if (currentMinute < 10) {
            currentMinute = "0" + currentMinute;
        }
        
        if (currentSecond < 10) {
            currentSecond = "0" + currentSecond;
        }

        return `${currentHour}:${currentMinute}:${currentSecond}`;
    }

    setTime() {
        this.setState({
            time: this.getTime()
        });
    }

    render () {
        return <span>Time is: {this.state.time}</span>;
    }
}