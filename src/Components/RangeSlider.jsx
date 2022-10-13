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
    handleChange = value => {
        this.setState({
            value: value
        })
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
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Horizontal