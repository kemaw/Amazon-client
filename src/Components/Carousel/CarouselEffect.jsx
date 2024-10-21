import React from "react";
import { Carousel } from "react-responsive-carousel";
// import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from "./Carousel.module.css";
import img from "./img/data";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageLink, i) => {
          return <img src={imageLink} key={i} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
