import React from "react";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";
import { Steps, Button, message} from "antd";
import { useState } from "react";
import Step1 from "../components/Step1";


const FarmerRigestration = () => {
const {user, authenticate, isAuthenticated, isAuthenticating} = useMoralis();
const {Step} = Steps;

const [current, setCurrent] = useState(0);

const next = () => {
  setCurrent(current + 1);
};

const prev = () => {
  setCurrent(current - 1);
};


const authenticatedSucessfully = () => {

if(!isAuthenticated)
    return (
        <p>dsadadasd</p>

    )
    else if(isAuthenticated)
    <p>{user.attributes.ethAddress}</p>


    }







const steps = [
    {
      title: 'First',
      content: <div>
        {authenticatedSucessfully()}


      </div>



    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];




return (
    <div className="container">
<Header/>
<div className="results-header">
<span>Farmer Registration</span>
</div>



<Steps current={current}>

    
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}

        
      </Steps>
      <div className="steps-content">{steps[current].content}
      
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>

</div>

)



}

export default FarmerRigestration
