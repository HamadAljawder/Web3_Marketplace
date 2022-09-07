import { useMoralisQuery } from "react-moralis";
import Header from '../components/Header';
import {Badge, Descriptions, Button, Divider } from "antd";
import { CheckSquareFilled } from '@ant-design/icons';
import { useLocation } from 'react-router';


const OrderDetails = () => {

  let {state: id} = useLocation();
  console.log(id)

    const { data, error, isLoading } = useMoralisQuery("Transaction",
    (query) => query.equalTo("objectId", id),
    [],
    );
    
   
     if (error) {
       return <span>🤯</span>;
     }
     
     if (isLoading) {
       return <span>🙄</span>;
     }
     for (let i = 0; i < data.length; i++) {
     const object = data[i];
     
     // var Delivery = object.get("Customer")
     var Farmer = object.get("Farmer")
     var Product = object.get("Product")
     }
   
     
   
     return (  
     <>    
     <Header/>
     <div className="results-header">
          <span>Order Details</span>
        </div>
 <span>Orders - This month - <b>0x982372198</b> </span>
            <h1 style={{fontSize:"30px"}}>Records</h1>

  <Descriptions title="Order Info: 0x982372198" size="small" bordered>
    <Descriptions.Item label="Product">{Product}</Descriptions.Item>
    <Descriptions.Item label="Farmer">{Farmer}</Descriptions.Item>
    <Descriptions.Item label="Credit Terms" span={3}>1 payment of <b>$400</b> every 15 days. <b>6 Payments in Total.</b></Descriptions.Item>
    <Descriptions.Item label="Automatic Payments">YES</Descriptions.Item>
    <Descriptions.Item label="Order Time">2022-06-7 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Delivery Date" span={2}>
      2022-04-24 
    </Descriptions.Item>
    <Descriptions.Item label="Payments Status" span={3}>
      <Badge status="processing" text="Ongoing" />
    </Descriptions.Item>
    <Descriptions.Item label="Total Amount" span={3}>$24,00</Descriptions.Item>
    <Descriptions.Item label="Order TX" span={3}>
    0x7ec4ccea8aa1a40823a842bfdaa13854bfb6cf939a19694a477b0dd8c30daffd
    </Descriptions.Item>
  </Descriptions>
  <Divider dashed />
  <a href="https://mumbai.polygonscan.com/tx/0x7ec4ccea8aa1a40823a842bfdaa13854bfb6cf939a19694a477b0dd8c30daffd" target="_blank" rel="noreferrer">
  <Button type="primary"  icon={<CheckSquareFilled />} size="large" >
    Verify Transaction on Blockchain
      </Button></a> 



     </>
     )

}

export default OrderDetails;
