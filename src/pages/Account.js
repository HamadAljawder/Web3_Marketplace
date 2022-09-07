import React from "react";
import Header from "../components/Header";
import UserInfo from "../components/account/UserInfo";
import OrderList from "../components/account/OrderList";
import { Tabs } from "antd";
import "./Product.css";
import { useMoralis } from "react-moralis"; 

const { TabPane } = Tabs;

const Account = () => {
  const { authenticate, isAuthenticated } = useMoralis();


  if (!isAuthenticated) {
    return (
      <div>
        <h2>You must login to access this page. Click the button below</h2>
        <button className="login" onClick={() => authenticate()}>Log In</button>
      </div>
    );
  }


  return (  
  <>    
   <div className="container">
    <Header />
    <div className="results-header">
          <span>Account Page</span>
        </div>


        <div>
      <Tabs defaultActiveKey="1" type="card" size={"large"} tabPosition={"left"}>
        <TabPane tab="Account Information" key="1">
            <UserInfo />
        </TabPane>


        <TabPane tab="Past Orders" key="2">
          <OrderList />
        </TabPane>


        <TabPane tab="Card Tab 3" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </div>
    </div>
  </>
  )


}


export default Account;
