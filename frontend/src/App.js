import "./App.css";
//import Header from "./component/Home/Header"
import Home from "./component/Home/Home"
import Services from "./component/Home/Services"
import YourRequest from "./component/Home/YourRequest"

import WebFont from "webfontloader";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./component/Products/ProductDetails";
import LoginSignup from "./component/Authentification/LoginSignup";
import UserData from "./more/userData";
import { useSelector } from "react-redux";
import Store from "./store";
import { loadUser } from './Actions/userAction';
import Profile from "./component/user/Profile";
import ProtectedRoute from './route/ProtectedRoute';
import UpdatePassword from './component/user/UpdatePassword';
import Products from './component/Products/Products';
import EditProfile from './component/user/EditProfile';
import About from './component/About/About';
import Search from "./component/Products/Search";
import Support from "./more/Support";
import Cart from './component/cart/Cart';
import Favourites from './component/cart/Favourites';
import Shipping from './component/cart/Shipping';
import ConfirmOrder from './component/cart/ConfirmOrder';
import Success from "./component/cart/Success";
import MoreOption from "./component/user/MoreOption"
import MyOrder from "./component/user/MyOrder";
import MyOrderDetails from "./component/user/MyOrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import CreateProduct from "./component/Admin/CreateProduct";
import AllProducts from "./component/Admin/AllProducts";
import CreateOrder from "./component/cart/CreateOrder";
import EditProduct from "../../frontend/src/component/Admin/EditProduct";
import AllOrder from "../../frontend/src/component/Admin/AllOrder";
import UpdateOrder from "../../frontend/src/component/Admin/UpdateOrder";
import AllUsers from "./component/Admin/AllUsers";
import UpdateUser from "./component/Admin/UpdateUser";
import Contact from "./more/Contact";
import ForgotPassword from "./component/user/ForgotPassword";
import ResetPassword from "./component/user/ResetPassword";

function App() {
  const {isAuthenticated,user} = useSelector((state) =>state.user);


  useEffect(() => {
    
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    
  }, []);
  
  
  return (
   <Router>
     {isAuthenticated && <UserData user={user} />}    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/login" component={LoginSignup} />
      <Route exact path="/about" component={About} />
      <Route exact path="/votrerequest" component={YourRequest} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/products/:keyword" component={Products} />
      <Route exact path="/products/:category" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/createorder" component={CreateOrder} />
      <Route exact path="/contact" component={YourRequest} />
      <Route exact path="/contact1" component={Contact} />
      <Route exact path="/more" component={MoreOption} />
      <Route exact path="/password/reset/:token" component={ResetPassword} />
      <ProtectedRoute exact path="/success" component={Success} />
      <ProtectedRoute exact path="/support" component={Support} />
      <ProtectedRoute exact path="/shipping" component={Shipping} />
      <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
      <ProtectedRoute exact path="/me" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
      <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
      <ProtectedRoute exact path="/orders" component={MyOrder} />
      <ProtectedRoute exact path="/order/:id" component={MyOrderDetails} />
      <ProtectedRoute isAdmin={true} exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute isAdmin={true} exact path="/admin/product" component={CreateProduct} />
      <ProtectedRoute isAdmin={true} exact path="/admin/products" component={AllProducts} />
      <ProtectedRoute isAdmin={true} exact path="/edit/product/:id" component={EditProduct} />
      <ProtectedRoute isAdmin={true} exact path="/admin/orders" component={AllOrder} />
      <ProtectedRoute isAdmin={true} exact path="/admin/order/:id" component={UpdateOrder} />
      <ProtectedRoute isAdmin={true} exact path="/admin/users" component={AllUsers} />
      <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
      <Route exact path="/password/forgot" component={ForgotPassword} />





    
    </Switch>

   </Router>
  );
}

export default App;

