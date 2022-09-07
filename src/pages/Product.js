import React from 'react';
import { Rate } from 'antd';
import { CoffeeOutlined, BlockOutlined } from '@ant-design/icons';
import "./Product.css";
import Header from '../components/Header';
import { useLocation } from 'react-router';
import Purchase from '../components/Purchase';



const Product = () => {
  
  let {state: coffee} = useLocation();
  return (
  <>
  <div className="container">
    <Header />
    <div className="product-content">
      <div>
        <div className="product-img">
          <img src={coffee.image} alt="product" width="100%"></img>
        </div>
        <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
      </div>
      <div className="product-details">
        <h1>{coffee.name}</h1>
        <Rate character={<CoffeeOutlined />} style={{ color: '#63341f' }} value={coffee.rating} disabled={true}></Rate>
        <hr></hr>
        <p>
          Price:
          <span className="price"> ${coffee.price} / kg</span>
        </p>
        <p className='price-notice'>Best price in the last 6 months according to the coffee federation estimates!</p>
        <hr></hr>
        <h3>About <b>{coffee.farmer}</b></h3>
        <p>
          {coffee.about}
        </p>
                <p><BlockOutlined spin /><b> Account ID: </b>{coffee.farmerAddress}</p>

      </div>
      <div className="purchase-details">
      <Purchase coffee={coffee}/>
      </div>
    </div>
  </div>
  </>
)
}

export default Product;