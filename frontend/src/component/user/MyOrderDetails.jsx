import React, { useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../Actions/OrderAction";
import { useAlert } from "react-alert";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";
import Header from "../Home/Header";
import sea_logo from "../../Assets/sea_logo.png";
import ABB from "../../Assets/abb.png";
import Siemens from "../../Assets/Siemens-logo-transparent-png.png";
import IQN from "../../Assets/iqnet-logo.png";
import DQS from "../../Assets/dqs.png"
import Scaime from "../../Assets/logo/scaime.png"
import zimmer from "../../Assets/logo/zimmer.png"
import kraft from "../../Assets/logo/kraft.PNG"



const MyOrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.myOrderDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Order Details" />

          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <center>
            <ul
          style={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            display: "flex",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "lefet",
          }}
        >
          
          <li> <img
            src={sea_logo}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
        
        
          <li>
         <img
            src={Siemens}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
         <img
            src={Scaime}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
        <img
            src={zimmer}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
        <img
            src={ABB}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
        <img
            src={kraft}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
         <img
            src={IQN}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          <li>
         <img
            src={DQS}
            alt=""
            className="logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          </li>
          
          <li></li>
        </ul>
        </center>

              
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                    
                  </span>
                 
                  
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.state}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >                  
                  </p>
                  
                </div>

                <div>
                  <p>Amount:</p>
                  <span>DNT {order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">

                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.Offer}>
                      <img src={item.image} alt="Product" />
                      <Link>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X DNT{item.price} ={" "}
                        <b>DNT{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}


              </div>
            </div>
          </div>
        </>
      )}
      <BottomTab />
    </>
  );
};

export default MyOrderDetails;