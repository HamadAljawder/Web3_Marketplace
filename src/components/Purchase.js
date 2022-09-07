import {Select, Button, Modal, Input, InputNumber} from 'antd'
import {CheckCircleOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { configConsumerProps } from 'antd/lib/config-provider';

const {control} = Select;
function Purchase({coffee}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [delivery, setDelivery] = useState("");
  const {Moralis, account, chainId} = useMoralis();

  const handleOk = async () => {

    // Get The Price of MATIC

    const control = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth"
    };
    const price = await Moralis.Web3API.token.getTokenPrice(control);
    console.log(price)
    const priceMatic = coffee.price / price.usdPrice;
    
    // Send Matic to coffee store owener address

    const controller = {
      type: "native", 
      amount: Moralis.Units.ETH(priceMatic), 
      receiver: "0x979BA6496745EAf8d73c823B8938D53a26CD7a81"
    }
    let result = await Moralis.transfer(controller)


    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();

    transaction.set("Customer", account);
    transaction.set("FarmerAccount", coffee.farmerAddress);
    transaction.set("Delivery", delivery);
    transaction.set("Product", coffee.name);
    transaction.set("Farmer", coffee.farmer);


    transaction.save()
    setIsModalVisible(false);
  }

  return (
    <>
      <span className="price"> ${coffee.price} / kg</span>
      <p>Discounted prices for Bulk Orders over 4 tonnes</p>
      <h1 style={{ color: "green" }}> Available </h1>
      <h3>Quantity</h3>
      <InputNumber defaultValue={2000} addonAfter="KG"  style={{ width: '100%' }} />
      {
      <Button
      className="login"
      style={{ width: "100%", marginTop: "50px", backgroundColor: "green" }}
      onClick={()=>setIsModalVisible(true)}
    >
      <CheckCircleOutlined /> Book Coffee
    </Button>
      }
      
      <Modal
        title="Coffee This Coffee"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={()=>setIsModalVisible(false)}
      >
        <div style={{ display: "flex" }}>
          <img src={coffee.image} alt="product" style={{ width: "200px", borderRadius:"8px" }}></img>
          <div style={{ padding: "10px" }}>
            <h3>{coffee.name}</h3>
            <h2>{coffee.farmer}</h2>
            <h4>Delivery Address</h4>
            <Input onChange={(value) => setDelivery(value.target.value)}></Input>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Purchase