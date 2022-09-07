import { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Descriptions, Button, Space, Badge, Switch, Input, Divider} from "antd";
import ErrorBox from "../error";



const UserInfo = () => {

    const { authenticate, isAuthenticated, user, setUserData, userError, isUserUpdating,} = useMoralis();
    const [username, setUsername] = useState(user.attributes.username);
    const [email, setEmail] = useState(user.attributes.email);
    const [address, setAddress] = useState(user.attributes.address);
    const [password, setPassword] = useState("");
    const [isShown, setIsShown] = useState(false);


    const handleSave = () => {
        setUserData ({
            username,
            email,
            password: password === "" ? undefined : password

        })}    

      let verified;
        if (user.attributes.emailVerified) {
        verified = <Badge status="success" text="Verified" />

        } else {
                verified = <Badge status="error" text="Not Verified" />
                               }


    const handleClick = event => {
        setIsShown(current => !current);
    };


     return (  
     <>    

 <Space>

 <Descriptions title="Profile Details"  bordered  extra= {<span>Edit Info <Switch onClick={handleClick}/></span>}>
    <Descriptions.Item label="Username">{user.attributes.username}</Descriptions.Item>
    <Descriptions.Item label="Email">{user.attributes.email}</Descriptions.Item>
    <Descriptions.Item label="Address" span={3}>{user.attributes.address}</Descriptions.Item>
<Descriptions.Item label="Account Status" span={3}>
         {verified}
    </Descriptions.Item>
  </Descriptions>
 </Space>

 {isShown && (
        <div>
            <Divider />

 <Space direction="vertical">
    {userError && <ErrorBox title="Error" message={userError.message} />}
 <div>
    <h2>Edit Your Profile</h2>
    <label>Username</label>
<Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
<label>Email</label>

<Input value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
<label>Password</label>

<Input value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>


<label>Change Address</label>
<Input value={address} onChange={(event) => setAddress(event.currentTarget.value)}/>
<Divider />
<Button type="primary" block onClick={handleSave} isLoading={isUserUpdating}>Update Profile</Button>
        </div>
        </Space>  </div>
      )}
     </>
     )

}

export default UserInfo;
