import React from "react";
import { Carousel } from "react-bootstrap";

function Slider(props) {
  return (
    <div style={{ width: "60%" }} className="m-auto pt-1 pb-1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img4.goodfon.com/wallpaper/nbig/b/b5/limonad-apelsin-laim-iagody-led.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Напитки и коктейли</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://img4.goodfon.com/wallpaper/nbig/d/99/tort-teramisu-banan-vypechka-sladost.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Десерты</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://img1.goodfon.com/wallpaper/nbig/0/e5/myaso-bifshteks-kartofel-salat.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Блюда из мяса</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;