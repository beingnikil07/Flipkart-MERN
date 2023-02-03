import { useEffect, React } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getProductsDetails} from '../../redux/actions/productActions';

/*Abhi products ko hum database se fetch marenge based on product id aur ye hum redux kii help se 
   karenge useEffect ko isliye use kiya kyuki mai component ke render hote se ye perform karna 
    chahta hu.Aur iske liye hum react-router ke useParams hook ka use karte hai  
*/
const ProductDescription = () => {
    const dispatch = useDispatch();   //initializing hook
    const { id } = useParams();

    useEffect(()=>{
        /*  Hum idhar se dispatch krr rhe hai jabki ye getProductsDetails hum redux mai rakhenge aur
            udhar iska calling ka logic rakhenge .
            hum yha se hum jante hai url se humko products kii id mil jaayegi ,hum yha se product kii
            id ko pass kar denge
            Humne end mai useEffect ko call kiya jvv jvv dispatch hoga aur ya id change hogi tvv tvv
            useEffect dobara render hoga .id change hogi everytime to ye hook dobara chalega 
          */
            dispatch(getProductsDetails(id));
        }, [dispatch, id]);


    return (
        <>
            <h1>Hello</h1>
        </>
    )

}
export default ProductDescription;