import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mx-4">
        <h2 className="text-[14.35px] font-[600] mb-3"> Fahrzeugtyp wählen </h2>
        <Slider {...settings}>
          {
            [1,2,3,4,5,6,7,8,9,10].map((index) => (
                <Card key={index} index={index}/>
            ))
          }
        </Slider>
      </div>
    );
  }
}