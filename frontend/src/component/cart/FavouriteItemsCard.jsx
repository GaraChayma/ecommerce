import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import "./FavouriteItemsCard.css";
import { useSelector,useDispatch } from "react-redux";
import {deleteFavouriteItemsToCart} from "../../Actions/FavouriteAction";
import { addItemsToCart } from "../../Actions/CartAction";
import { ToastContainer, toast } from "react-toastify";


const FavouriteItemsCard = ({item, deleteFavouriteItems,match}) => {
    const dispatch = useDispatch();
    const { product} = useSelector(
        (state) => state.productDetails
      );
      const [quantity, setQuantity] = useState(1);

      const increaseQuantity = () => {
        if (product.Stock <= quantity) return toast.error("Product stock limited");
        const qty = quantity + 1;
        setQuantity(qty);
      };
    
      const decreaseQuantity = () => {
        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
      };
    
      // const checkoutHandler = (id) => {  
      //    dispatch(deleteFavouriteItemsToCart(id));
      //    dispatch(addItemsToCart(id));
      //   // localStorage.removeItem(); 
      //   // Remove the specific item from local storage
      //  // dispatch(removeItemsFromCart(id));
    
      // };
      const checkoutHandler = (id) => {
        if (product.Stock > 0) {
          dispatch(addItemsToCart(id, quantity));
          dispatch(deleteFavouriteItemsToCart(id));
          toast.success("Product Added to cart");
        } else {
          toast.error("Product stock limited");
        }
      };

    return (    
        <div className='FavouriteItemsCard'>
        <div>
        <img src={item.image} alt="ssa" />
        <p onClick={() => deleteFavouriteItems(item.product)}>Remove</p>
        <Link to={`/product/${item.product}`} style={{
            fontSize:"300 0.9vmax",
            fontFamily:"cursive",
        }}>{item.name}</Link>
        </div>

        <div>
            <span 
            style={{
              // marginRight:"400px"
            }}
            >{` ${item.price} DNT`}</span> 
        </div>
        <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input type="number" readOnly value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>{" "}
                </div>
        

        <div>
        <p style={{ paddingBottom: ".5vmax",
                    // marginRight:"40px",
                   
      }}>
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
        </div>
        
        <div>
          <Link to={`/product/${item.product}`}>
           <button className='favouritesButton' onClick={() => checkoutHandler(item.product)}>Add To Cart</button>
           </Link>
        </div>

    </div>
    )
}

export default FavouriteItemsCard