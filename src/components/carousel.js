import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./images/ocean.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/image-profile.png" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'))

export default DemoCarousel
