import React from "react";
import { Link } from "react-router-dom";
import sea_logo from "../../Assets/sea_logo.png";
import LinkedIn from "../../Assets/logo/LinkedIn.png"
const Footer = () => {
  return (
    <div className="Footer flex space__around pz__15" style={{"borderTop":".3px solid rgba(21,21,21,0.5)"}}>
      {/* Footer 1st part */}
      <div className="footer1st">
        <img
           src={sea_logo}
           alt=""
           className="logo"
           style={{
             width: "80px",
             height: "80px",
             objectFit: "contain",
             cursor: "pointer",
        
        }}
        />
        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <strong>Address:</strong>
          <h6>Angle Voie 11-12 Zone Industrielle Sidi Abdelhamid, Sousse, Tunisia</h6>
        </div>

        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <strong>Email:</strong>
          <h6>nouiradhia@sea-electronics.com</h6>
        </div>

        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
          </svg>
          <strong>Call us: Tel/Whatsapp</strong>
          <h6>(+216) 58 072 697</h6>
        </div>

        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <strong>Time:</strong>
          <h6> 24/7 </h6>
        </div>
        

       
      </div>
      {/* Footer 2nd part */}
      <div className="mobile">
        <div className="footer__2nd__part">
             <h5>Account</h5>
             <Link to="/login"><h3>Log In</h3></Link>
             <Link to="/login"><h3>Sign In</h3></Link>
             <Link to="/login"><h3>Registration</h3></Link>
             <Link to="/password/forgot"><h3>Forgot Password</h3></Link>
        </div>
        {/* Footer 3rd part */}
        <div className="footer__2nd__part">
             <h5>Follow us</h5>
             <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-facebook pointer"
            viewBox="0 0 16 16"
            style={{
                color:"#0084FF",
                margin:"0px 10px"
            }}
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          </Link>
          <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-youtube pointer"
            viewBox="0 0 16 16"
            style={{
                color:"#E81D45",
                margin:"0px 10px"
            }}
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
          </svg>
          </Link>
          <Link to="/">
          <img
                  src={LinkedIn}
                  alt=""
                  className="logo"
                  style={{
                    width: "60px",
                    height: "40px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
          </Link>
        </div>
      {/* Footer 4th part */}
       {/* <div className="footer__3rd__part">
            <h5>Buiseness</h5>
             <Link to="/creator"><h3>Create A Seller Account</h3></Link>
             <Link to="/creator"><h3>Seller Rules</h3></Link>
             <Link to="/Products"><h3>View Shop</h3></Link>
             <Link to="/support"><h3>Report us</h3></Link>
       </div> */}
      {/* Footer 5th part */}
      <div className="footer__4th__part">
      <h5>Rules</h5>
      {/* <Link to="/faq"><h3>FAQ</h3></Link> */}
      <Link to="/services"><h3>engineeringServices</h3></Link>
      <Link to="/about"><h3>About us</h3></Link>
      <Link to="/contact"><h3>Contact us</h3></Link>
      {/* <Link to="/creator"><h3>Live Chat</h3></Link> */}
        </div>
        </div>
    </div>
  );
};

export default Footer;