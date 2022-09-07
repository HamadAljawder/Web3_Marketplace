import { useMoralis } from "react-moralis"



const Step1 = () => {
const {user, isAuthenticated} = useMoralis();


if(!isAuthenticated) 
    return (

        <p>dsadadasd</p>

    ) 

    



}

export default Step1