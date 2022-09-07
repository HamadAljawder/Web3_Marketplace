import { Button, Modal, Input, Divider, notification} from 'antd'
import {PlusCircleFilled, WalletOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from 'react-moralis';


function Bid({coffee}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
//   const [delivery, setDelivery] = useState("");
  const [bid, setBid] = useState("");
  const {Moralis, account} = useMoralis();

  const handleOk = async () => {

    //Save Transaction Details to DB
    const Bid = Moralis.Object.extend("Bid");
    const newBid = new Bid();

    newBid.set("Customer", account);
    newBid.set("FarmerAccount", coffee.farmerAddress);
    newBid.set("Amount", bid);
    newBid.set("Product", coffee.name);
    newBid.set("Farmer", coffee.farmer);
 

    newBid.save()
    setIsModalVisible(false);
    openNotificationWithIcon('warning');
  }

  const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Farmsent NFT Bid Approved',
    description:
      'Your bid has been successfully accepted. Thank you.',
  });
};



  return (
    <>
      <h1 style={{ color: "green" }}> Place Your Bid </h1>
      <h3>Your Bid:</h3>
      <Input prefix="$" onChange={(value) => setBid(value.target.value)}></Input>
      {
      <Button
      className="login"
      style={{ width: "100%", marginTop: "50px", backgroundColor: "green" }}
      onClick={()=>setIsModalVisible(true)}
    >
      <PlusCircleFilled /> Bid Amount
    </Button>
      }
      
      <Modal
        title="Confirm Your Bid"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Confirm Bid"

        onCancel={()=>setIsModalVisible(false)}
      >
        <div style={{ display: "flex" }}>
          <img src={coffee.image} alt="product" style={{ width: "200px", borderRadius:"8px" }}></img>
          <div style={{ padding: "10px" }}>
            <h3>{coffee.name}</h3>
            <h3>By {coffee.farmer}</h3>
            <Divider />
            <h2> Your Bid: <b>${bid}</b></h2>
            <p style={{ wordBreak: "break-word" }}> <WalletOutlined /> From Wallet: <b>{account}</b></p>
                  </div>
        </div>
      </Modal>
    </>
  )
}

export default Bid