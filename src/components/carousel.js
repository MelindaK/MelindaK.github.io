import React from "react"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import slide01 from "../images/gatsby-icon.png"

const EndorsementCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img src={slide01} alt="this is the first slide" />
    </Carousel.Item>

    <Carousel.Item>
      item #2
    </Carousel.Item>

    <Carousel.Item>
      item #3
    </Carousel.Item>
  </Carousel>
)

export default EndorsementCarousel
