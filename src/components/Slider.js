import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/52/793/81/tv-show-the-office-us-dwight-schrute-rainn-wilson-wallpaper-preview.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Diwght Schrute</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://mcdn.wallpapersafari.com/medium/0/13/elsBJw.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
        <h2>Micheal Scott </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://forevertwentysomethings.com/wp-content/uploads/2016/06/jim-sad.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Jim halpert</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.looper.com/img/gallery/whatever-happened-to-stanley-from-the-office/intro-1574100890.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2> Stanely </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://data.awol.com.au/wp-content/uploads/2019/10/creed.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2> Creed bratton </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/649/376/desktop-wallpaper-pam-beesly.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2> Pam beasly </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
