import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import './Header.css';
// import USA from "../images/usa.png";
import Colombia from "../images/colombia.png";
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";

const {Search} = Input;
const varieties = ["Cattura", "Castillo", "Colombia", "Tabi", "Geisha", "Typica"];

const Header = () => {
  const { authenticate, account } = useMoralis();

  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <span  className="logo">FARMERS</span>
          <span>COLOMBIA <img className="colombia-flag"src={Colombia}></img></span> ▾
          <Link to="/Account"> Account </Link>
          <Link to="/Bidding"> Bidding </Link>
          {/* <Link to="/FarmerRegistration"> FarmerRegistration </Link> */}
          <Search
              placeholder="Find Coffee"
              enterButton
              className = "searchBar"
            />
         <Button 
         className="login"
         key="1" 
         type="primary" 
         onClick={() => authenticate({signingMessage: "Authenticate your Wallet with Farmsent"})}>
 
          {account ? <span>{account.slice(0,5)}...</span> : <span>LOGIN</span>}
          </Button>
          <Space size={"large"}>
              
              <Badge color="#3e2c72" count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                </span>
              </Badge>
              {/* <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space> */}
              
            </Space>
          </>
        ]}>
      </PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
          Varieties
        </Space>
        {varieties.map((e) =>{
          return(
            <Link to="/varieties" state={e} className="varieties">
              {e}
            </Link>
          )

        })}
      </Space>
    </div>
    </div>
  )
}

export default Header;