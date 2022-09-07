import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.JPG";
import Antioquia from "../images/Antioquia.jpg";
import Rainforest from "../images/Rainforest.jpg";

const carousel = [Carousel1];
const Home = () => {

return(
  <>
  
  <div className="container">
    <Header/>
    <h1 className='hero-title'>FARMER | Web3 Marketplace </h1>

    <Carousel
    autoplay effect="fade" className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>
    })}
    </Carousel>
    
    <div className="cards">  
      <Card className="card">
        <h1>Coffee from Antioquia</h1>
        <img src={Antioquia} alt="Antioquia Variety" className="card-content"></img>
        <br />
        <Link to="/varieties" state={"Comics"} className="link">
          Shop Now
        </Link>
      </Card>
      <Card className="card">
        <h1>Rainforest Certified</h1>
        <img src={Rainforest} alt="Artemis Fowl" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Coffee
        </Link>
      </Card>
    </div>
  </div>
  </>
)
}

export default Home;