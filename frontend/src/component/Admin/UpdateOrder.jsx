import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../Actions/OrderAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constans/OrderConstans";
import "./UpdateOrder.css";
import { ToastContainer, toast } from 'react-toastify';



const UpdateOrder = ({ history, match }) => {
  const { order, error, loading } = useSelector((state) => state.myOrderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.deleteOrder);
 
  const updateOrderSubmitHandler = (e) => {
     e.preventDefault();
     const myForm = new FormData();
     myForm.set("status", status);
     dispatch(updateOrder(match.params.id, myForm));
   };

   const dispatch = useDispatch();

   const [status, setStatus] = useState("");

   useEffect(() => {
     if (error) {
       toast.error(error);
       dispatch(clearErrors());
     }
     if (updateError) {
       toast.error(updateError);
       dispatch(clearErrors());
     }
     if (isUpdated) {
       toast.success("Order Updated Successfully");
       dispatch({ type: UPDATE_ORDER_RESET });
     }

     dispatch(getOrderDetails(match.params.id));
   }, [dispatch, error, match.params.id, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loading />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>

                
                <div className="confirmshippingArea"
                style={{marginTop:"-60px"
                }}
                >
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox"
                  style={{marginTop:"15px"
                }}
                  >
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

                  <Typography
                  style={{marginTop:"-30px" }}
                  >Payment</Typography>
                  <div className="orderDetailsContainerBox"   style={{marginTop:"5px" }}>
                    
                    <div  >
                      <p>Amount:</p>
                      <span>DNT{order.totalPrice && order.totalPrice}</span>
                    </div>
                  </div>

                  <Typography style={{marginTop:"-30px" }}>Order Status</Typography>
                  <div className="orderDetailsContainerBox"  style={{marginTop:"5px" }}>
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
                <div className="confirmCartItems">
                  <Typography style={{marginTop:"-45px" }}>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer" style={{marginTop:"5px" }}>
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={``}>
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
              {/*  */}
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}
                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>
                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </Fragment>
  );
};

export default UpdateOrder;