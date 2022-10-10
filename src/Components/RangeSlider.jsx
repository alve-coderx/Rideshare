import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import './style.css'
class Horizontal extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 10
        }
    }

    handleChangeStart = () => {
        console.log('Change event started')
    };

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    render() {
        const { value } = this.state
        return (
            <div className='slider'>
                <p className='text-[#7D7AFF] text-[500] text-[16px]'>{value} km</p>
                <Slider
                    min={0}
                    max={100}
                    value={value}
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                />
            </div>
        )
    }
}

export default Horizontal