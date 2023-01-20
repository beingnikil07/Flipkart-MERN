//First step i will create a context
import { createContext, useState } from "react";

//Ek variable create kiya aur usme context ko store kiya with the initial value of null 
//export humne isliye kiya avv hum iss context ke through ke khel karenge 
export const dataContext = createContext(null);

//Creating a react functional component... 
const DataProvider = () => {

    const [Account, setAccount] = useState('');

    return (
        //Now we are going to use our context.
        //Provider is a method of context 
        //Avv value attribute ke through hum apni states ko export karwayenge
        //States ko mention krr diya jinko hum export karwana chahate hai 
        //Avv inn states ko hum jis kisi component mai use karenge to humko 
        //data provider mai wrap karane padega unn components ko   
        <dataContext.Provider value={{
            Account,
            setAccount
        }}>
        </dataContext.Provider>
    )

};
export default DataProvider;
