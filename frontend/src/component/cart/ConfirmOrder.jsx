import React from "react";
import "./ConfirmOrder.css";
import { useSelector,useDispatch } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../../more/BottomTab";
import { createOrder } from "../../Actions/OrderAction";
import{removeItemsFromCart} from "../../Actions/CartAction"
import { deleteAllItems } from "../../Actions/CartAction";



const ConfirmOrder = ({ history }) => {
  const dispatch = useDispatch();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const { user } = useSelector((state) => state.user);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const subtotal = productPrice 
      // eslint-disable-next-line
    const shippingCharges = productPrice > 100 ? 30 : 10;
    //const shippingCharges =20;
    
    const totalPrice = subtotal + shippingCharges;
    const shippingPrice =shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      //console.log("waaaaaaa");
      const data = {
        subtotal,
        shippingPrice,
        totalPrice,
        shippingInfo,
        orderItems: cartItems,
      };
      dispatch(createOrder(data));
      dispatch(deleteAllItems());
      //localStorage.removeItem(); 
      //dispatch(removeItemsFromCart())
      localStorage.clear();
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
        history.push("/success");
        
    };
  
    return (
      <>
        <MetaData title="Confirm Order" />
        <CheckoutSteps activeStep={1} />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography>Shipping Info</Typography>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Name:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div> 
            <div className="confirmCartItems">
              <Typography>Your Cart Items:</Typography>


              {cartItems.length === 0 ? 
                <div className="confirmCartItemsContainer">
                   ""
                 </div>
                  :
             <div className="confirmCartItemsContainer">
             {cartItems.map((item) => (
               <div key={item.product}>
                 <img src={item.image} alt="Product" />
                 <Link to={`/product/${item.product}`}>
                   {item.name}
                 </Link>{" "}
                 <span>
                   {item.quantity} X {item.price} TND ={" "}
                   <b>{item.price * item.quantity} TND</b>
                 </span>
               </div>
             ))
              }
           </div>
          }
     
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <Typography>Order Summery</Typography>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>{subtotal} TND</span>
                </div>
                <div>
                  <p>Shipping Charges:</p>
                  <span>{shippingCharges} TND</span>
                </div>
                <div>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>{totalPrice} TND</span>
              </div>
                  
              <button onClick={proceedToPayment}>order confirm</button>
            </div>
          </div>
        </div>
        <BottomTab />
      </>
    );
  };
  
  export default ConfirmOrder;