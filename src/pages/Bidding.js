import React from "react";
import Header from '../components/Header';
import {BlockOutlined} from '@ant-design/icons';
import {Badge, Divider, Statistic, Space, Skeleton} from 'antd';
import {products} from "../inventory";
import "./Product.css";
import { useLocation } from 'react-router';
import Bid from '../components/Bid';
import { useMoralisQuery } from "react-moralis";
import BiddingResults from "../components/BiddingResults";


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK



const Bidding = () => {

    const coffee = products.Cattura[0]
    console.log(coffee)


    const { data, error, isLoading } = useMoralisQuery(
        "Bid",
        (query) =>
         query
         .equalTo("Product", "Natural de Ciudad Bolívar - Antioquia")
         .descending("Amount")
         .limit(1),
         [],
         );
        console.log(data)


     if (error) {
       return <span>🤯</span>;
     }
     
     if (isLoading) {
       return (<span>🙄</span>,
<Skeleton/>
       )
     }

     for (let i = 0; i < data.length; i++) {
        const object = data[i];
        var finalBid = object.attributes.Amount
        console.log(finalBid)

     }





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
      <h5> Bidding Status: <b>Ongoing </b>     <Badge status="processing" /></h5>
        <h1>{coffee.name}</h1>
        <h2>By {coffee.farmer}</h2>
<Divider />
        <Countdown title="Bidding finishes in:" value={deadline} />
        <hr></hr>
        <h4>
          Starting Price:
          <span> <b>${coffee.price} for 500 kg</b></span>
        </h4>
        <h4>
            {data.map }
          Last Bid Price:
          <span> <b>${finalBid}</b></span>
        </h4>
        <hr></hr>
        <h3>About <b>{coffee.farmer}</b></h3>
        <p>
          {coffee.about}
        </p>
                <p><BlockOutlined/><b> Farmer Account ID: </b>{coffee.farmerAddress}</p>
      </div>
      <div className="purchase-details">
      <Bid coffee={coffee}/>

      </div>
      
      
    </div>
    <Divider> <Space>
        <h2>Bidding Results</h2>
        </Space></Divider>
    <BiddingResults/>


  </div>
       </>
    )


}

export default Bidding