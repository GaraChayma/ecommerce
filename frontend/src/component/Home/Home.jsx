import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/Carouselimg/bgkraftpowercon.PNG";
import logo1 from "../../Assets/logo/siemens.png";
import logo2 from "../../Assets/logo/scaime.png";
import logo3 from "../../Assets/logo/zimmer.png";
import logo4 from "../../Assets/logo/kraft.PNG";
import logo5 from "../../Assets/logo/ABB.PNG";
import bg1 from "../../Assets/Carouselimg/bgsiemens.PNG"
import bg4 from "../../Assets/Carouselimg/bgscaime.PNG"
import bg5 from "../../Assets/Carouselimg/bgziemmer.PNG"
import bg6 from "../../Assets/Carouselimg/bgabb.PNG"
//import bg2 from "../../Assets/background2.png";
import logoAuto from "../../Assets/logoservices/automatisme.png";
import logoElec from "../../Assets/logoservices/elec.png";
import logomain from "../../Assets/logoservices/maintenance.png";
import logrobo from "../../Assets/logoservices/robotique.png";
import logmecanique from "../../Assets/logoservices/mecanique.png";
import logformation from "../../Assets/logoservices/formation.png";

import bg2 from "../../Assets/home.PNG";
import ProductCard from "../Products/ProductCard";
import  {useDispatch, useSelector} from "react-redux"
import { clearErrors, getProduct } from "../../Actions/ProductActions";
import Header from "./Header";
import { Link } from 'react-router-dom';
import MetaData from "../../more/Metadata";
import Footer from "./footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from 'react-toastify';



const Home = () => {
 
  const dispatch = useDispatch();
  const { products} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
 
  return (
   
   <>
   <MetaData title="Home" /> 
   <Header />
   {/* Carousel */}
   <div className="banner">
               <Carousel slide={false} fade={false}>
                 <img key={1} src={bg2} className="bgImg"/>
                 <img key={2} src={bg1} className="bgImg"/>
                 <img key={3} src={bg4} className="bgImg"/>
                 <img key={4} src={bg5} className="bgImg"/>
                 <img key={5} src={bg}  className= "bgImg"/>
                 <img key={6} src={bg6} className="bgImg"/>
               </Carousel>
               
               
               

             <div className="home__content">
               <Link to="/votrerequest">
               <div style={{
                 display:"flex",
                 alignItems:"center",    
               }}>
               <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"900",
                 color:"tomato"
               }}>what are you looking for?</h2>
               
               
               
               
               </div>
               </Link> 
               <Link  to="/votrerequest">
               <div style={{
                 display:"flex",
                 alignItems:"center",
               }}>
             
      
               <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"900",
                 color:"red"
               }}>how can I help you ?               </h2>
               
               
               
               </div>
               </Link>
               
               <div style={{
                 display:"flex",
                 alignItems:"center",
               }}>
             
      
               <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"500"
               }}>Industrial Material</h2>
               
               
               
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                 }}>SEA Shop </h2>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontWeight:"400",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                   lineHeight:".7"
                 }}></h2>
               </div>
               <div>
                 <h2
                 style={{
                   fontWeight:"400",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                   fontSize:"1em",
                   paddingTop:"10px"
                 }}
                 >
                 
                 </h2>
               </div>
               <div>
                 <Link to="/about">
                 <button type="submit" style={{
                   width:"135px",
                   height:"50px",
                   border:"none",
                   background:"#3BB77E",
                   margin:"10px 20px",
                   fontSize:"1.2vmax",
                   color:"#fff",
                   cursor:"pointer"
                   
                 }}
                 className="Home__button"
                 >Details</button>
                 </Link>
                 <Link to="/votrerequest">
                 <button type="submit" style={{
                   width:"200px",
                   height:"50px",
                   border:"none",
                   background:"#FF6347",
                   margin:"10px 10px",
                   fontSize:"1.2vmax",
                   color:"#fff",
                   cursor:"pointer"
                 }}
                 className="Home__button"
                 >Your request</button>
                 </Link>
                 
               </div>
               
             </div>
         </div>

         <h2 className="homeHeading">Our partners</h2>
         {/* <Carousel style={{
                      display: "flex",
                      justifycontent: "center",
                      alignItems: "center",
                      height: "100%",
                   }}
        
         
         > */}
         <center>
          
                 <img key={1} src={logo1} className="Img"
                  style={{
                    justifycontent:" center",
                    width:"350px",
                    alignItems: "center",
                    paRight:"100px",
                    borderwidth:"10%",
                    borderColor:"black",
                    marginRight:"20px",
                    marginleft: "0px",
                   
                    
                   }}
                 
                 />
                 <img key={2} src={logo2} className="Img"
                 style={{
                  justifycontent:" center",
                  width:"350px",
                  height:"130px",
                  marginRight:"20px",
                  marginleft: "0px",
                 }}
                 
                 />
                 <img key={3} src={logo3} className="Img"
                  style={{
                    justifycontent:" center",
                    width:"350px",
                    height:"130px",
                    marginRight:"20px",
                    marginleft: "0px",
                   }}
                   
                 />
                 <img key={4} src={logo4} className="Img"
                 style={{
                  justifycontent:" center",
                  width:"350px",
                  height:"130px"
                 }}
                  
                 />
                 <img key={5} src={logo5} className="Img"
                 style={{
                  justifycontent:" center",
                  width:"350px",
                  height:"130px"
                 }}
                  
                 
                 />
                 </center>
                
                 
               {/* </Carousel> */}
    
 
 
         <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products && products.map((product) =>(
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <h2 className="homeHeading">Services</h2>
      <div className="container" id="container"
      style={{
        background:"#F5F5F5",
        width:"100%"
      }}
      
      
      >
       <div className="service component__space" id="Services">
         

            <div className="container">
                <div className="row">

                  <table>
                    <tbody>
                     <tr>
                      <td style={{
                         width: "20%",
                          padding:"40px",
                      //margin:"60px"
                      }}>
                        <Link to="/Services"
                        
                        >

                    <div className="col__3" 
                     style={{
                      borderRadius:"20%",
                      
                      width:"100%",
                     
                    }}
                    
                    >
                         <div className="service__box pointer" >
                            <div className="icon">
              

                <img
                  src={logoAuto}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
                            </div>
                            <div className="service__meta" 
                            >
                                <h1 className="service__text"
                                style={{
                                  color:"#1D35A4"
                                }}
                                
                                ><b>Automation</b></h1>
                                <p className="p service__text p__color"  
                                style={{
                              color:"black"
                            }}>
                                This department has been made to answer  
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                the needs of automated systems,conception,
                                 
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                realization and follow-up of industrial projects
                                
                                </p>
                                <p className="p service__text p__color">
                                <b
                                  style={{
                                    color:"#1D35A4"
                                  }}
                                > Read more....</b> 
                                
                                </p>
                                
                            </div>
                         </div>
                    </div>
                    </Link>
                    </td>
                    <td style={{
                         width: "20%",
                         padding:"40px",
                      }}>
                        <Link to="/Services">

                    <div className="col__3"
                    style={{
                      borderRadius:"20%",
                     
                      width:"100%",
                      
                    }}
                    >
                    <div className="service__box pointer">
                      <div className="icon">
                      <img
                  src={logoElec}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />

                        </div>
                            <div className="service__meta">
                                <h1 className="service__text"
                                     style={{
                                      color:"#1D35A4"
                                    }}
                                >Electrical engineering department
                                </h1>
                                <p className="p service__text p__color"
                                style={{
                                  color:"black"
                                }}>
                                This department has been created to 

                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                complete the group activities
                                </p>
                                <p className="p service__text p__color">
                                <b
                                 style={{
                                  color:"#1D35A4"
                                }}
                                > Read more....</b> 
                                  
                                </p>
                            </div>
                            
                         </div>
                         
                    </div>
                   </Link>
                    </td>
                    <td style={{
                          width: "20%",
                          padding:"40px",
                      }}>
                        <Link to="/Services">

                    <div className="col__3"
                     style={{
                      borderRadius:"20%",
                     
                      width:"100%",
                     
                    }}>
                         <div className="service__box pointer">
                            <div className="icon">
                            <img
                  src={logomain}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text"
                                 style={{
                                  color:"#1D35A4"
                                }}
                                >Maintenance & electronics</h1>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                Department of maintenance and industrial aid
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                Repairing electronic boards .
                                </p>
                                <p className="p service__text p__color">
                                  <b  style={{
                                  color:"#1D35A4"
                                }}> Read more....</b> 
                                </p>
                            </div>
                         </div>
                    </div>
                   </Link>
                    </td>
                    </tr>
                    <tr>
                      <td style={{
                         width: "20%",
                          padding:"40px",
                      //margin:"60px"
                      }}>
                        <Link to="/Services">

                    <div className="col__3" 
                     style={{
                      borderRadius:"20%",
                      
                      width:"100%",
                     
                    }}
                    
                    >
                         <div className="service__box pointer" >
                            <div className="icon">
                            <img
                  src={logrobo}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
        
                            </div>
                            <div className="service__meta" >
                                <h1 className="service__text"  style={{
                                  color:"#1D35A4"
                                }}>Robotics</h1>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                Industrial robotization 
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                 (palletizing, handling, welding, painting, ...)
                                </p>
                                <p className="p service__text p__color">
                                   <b
                                    style={{
                                      color:"#1D35A4"
                                    }}
                                   >Read more ....</b> 
                                </p>
                            </div>
                         </div>
                    </div>
                    </Link>
                    </td>
                    <td style={{
                         width: "20%",
                         padding:"40px",
                      }}>
                        <Link to="/Services">

                    <div className="col__3"
                    style={{
                      borderRadius:"20%",
                     
                      width:"100%",
                      
                    }}
                    >
                    <div className="service__box pointer">
                      <div className="icon">
                      <img
                  src={logmecanique}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
                        </div>
                            <div className="service__meta">
                                <h1 className="service__text"
                                 style={{
                                  color:"#1D35A4"
                                }}
                                >Mechatronics Department</h1>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                Design and implementation works of  
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                the production lines, assembly, packaging, 
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                               and special machines.
                                </p>
                                <p className="p service__text p__color">
                                  <b  style={{
                                  color:"#1D35A4"
                                }}>Read more ....</b>
                                </p>
                            </div>
                            
                         </div>
                         
                    </div>
                    </Link>
                    </td>
                    <td style={{
                          width: "20%",
                          padding:"40px",
                      }}>
                    <Link to="/Services">

                    <div className="col__3"
                     style={{
                      borderRadius:"20%",
                     
                      width:"100%",
                     
                    }}>
                         <div className="service__box pointer">
                            <div className="icon">
                            <img
                  src={logformation}
                  alt=""
                  className="logo"
                  style={{
                    width: "150px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
          />
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text"  style={{
                                  color:"#1D35A4"
                                }}>training</h1>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                Training and assistance Department
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                approved by the state (number 328/11-194/99) 
                                </p>
                                <p className="p service__text p__color" style={{
                              color:"black"
                            }}>
                                disposes of 4 laboratories and training rooms
                                </p>
                                <p className="p service__text p__color">
                                <b  style={{
                                  color:"#1D35A4"
                                }} >Read more ....</b>
                                </p>
                            </div>

                         </div>
                    </div>
                  </Link>
                    </td>
                    </tr>

                  
                    </tbody>
                    </table>

                </div>
            </div>
            
        </div>
        <div></div>
       
       


       
      </div>
      <Footer />
      <BottomTab />
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
    
       
   </>
   
  )
}

export default Home