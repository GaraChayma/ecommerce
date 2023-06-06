import React, { useEffect, useState } from "react";
import Footer from "../Home/footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../Actions/ProductActions";
import Pagination from "react-js-pagination";
import "./Product.css";
import Typography from "@material-ui/core/Typography";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";
import { Link } from "react-router-dom";

const categories = [
  {name:"Siemens",id:1},
  {name:"SCAIME",id:2},
  {name:"Zimmer",id:3},
  {name:"Kraftpowercon",id:4},
  {name:"ABB",id:5},
  {name:"Other",id:6},
  

 
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    console.log(e);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Products" />
          <Header />
          <div  >
            {products.length === 0 ?
              ""
             :  
              <h2 
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
                Featured Products
              </h2>
            }
            <div
              className="sidebar__product"
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <div
                className="sidebar__products"
                style={{
                  border: "1px solid #999",
                  margin: "1vmax",
                  flex: ".177",
                }}
              >
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  CHOOSE CATEGORIES
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category.id}
                      onClick={() => setCategory(category.name)}
                      type="checkbox"
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  QUICK LINKS
                </Typography>
                <li className="category-link">
                  <Link to="/cart"
                  style={{
                    color:"black",
                  }}
                  >My Carts</Link>
                  
               
                  
                  </li>
                <li className="category-link">
                  <Link to="/favourites"
                  style={{
                    color:"black",
                  }}
                  > Favourites Items</Link>
                 
                  </li>
                <li className="category-link">
                <Link to="/cart"
                  style={{
                    color:"black",
                  }}
                  >Go to Checkout</Link>
                  </li>
              </div>

              {products.length === 0 ? 
                <span
                  style={{
                    display: "block",
                    padding: "30px 0",
                    fontSize: "1.5rem",
                    flex: ".9",
                    textAlign: "center",
                  }}
                >
                  No Product Found ....
                </span>
                 : 
                <div
                  className="products"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flex: ".9",
                  }}
                >
                  {products &&
                    products.map((product) => (
                      <div  key={product._id}>
                         <ProductCard key={product._id} product={product} />
                      </div>
                     
                    ))}
                </div>
              }
            </div>

            <div
              className="pagination__box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "6vmax",
              }}
            >
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
          <Footer />
          <BottomTab />

        </>
      )}
    </>
  );
};

export default Products;
