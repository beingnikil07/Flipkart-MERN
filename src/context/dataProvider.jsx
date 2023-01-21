//First step i will create a context
import { createContext, useState } from "react";

//Ek variable create kiya aur usme context ko store kiya with the initial value of null 
//export humne isliye kiya avv hum iss context ke through ke khel karenge 
export const dataContext = createContext(null);

//Creating a react functional component... 
//App.js mai humne apne sabhi components ko wrap kiya hua hai dataProvider se to ya bol lo parent 
//jo hai sabhi components ka app.js mai dataProvider he hai .
//to isliye hum idhar children ko nikal rhe hai 
//Aur phir end mai hum  inko forward bhi krr rhe hai yha se 
const DataProvider = ({ children }) => {

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
            {children}
        </dataContext.Provider>
    )

};
export default DataProvider;
