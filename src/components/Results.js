import {Card, Rate, Divider} from 'antd';
import { CoffeeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./Results.css";
import {products} from "../inventory.js";

function Results({variety, rating, priceMin, priceMax}) {

 const productCategory = products[variety].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
    console.log(productCategory);
  return (
    <>
  {productCategory.map((e,i) => {
    return (
      <Card>
      <div style={{ display: "flex" }}>
        <img className='coffee-img' src={e.image} alt={i} width="300px"></img>
        <div>
          <p className="title">
            {e.name}
          </p>
          <h3> <UserOutlined /> By <b>{e.farmer}</b></h3>
          <Divider>Coffee Info</Divider>

          <h4>Variety: {e.variety}</h4>
          <h4> Process: {e.process}</h4>
          <Divider />

          <Rate character={<CoffeeOutlined />} style={{ color: '#63341f' }}  value={e.rating} disabled={true}></Rate>
          <h2> ${e.price} / kg</h2>
          <p>
            Ready to ship in 2-3 weeks.
          </p>
          <Link to="/product" state={e} className="login">
          More Info
        </Link>
        </div>
      </div>
    </Card>
    );
  })}
  </>
  )
}

export default Results