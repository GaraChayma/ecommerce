import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Home/footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./Services.css";
import Services123 from "../../Assets/services/Automatisme.jpg";
import Servicemaintenace from "../../Assets/services/maintenance.jpg";
import Serviceelec from "../../Assets/services/electronics.PNG";
import Servicerobotique from "../../Assets/services/robotics.PNG";
import Serviceformation from "../../Assets/services/formation.JPG";
import BottomTab from "../../more/BottomTab";
import { Link } from "react-router-dom";
import Pdf from "../../Assets/services/cataloguedeformation2023.pdf";



const Services = () => {
    const { loading } = useSelector(
        (state) => state.profile
      );
  return (
   
    <>
    <MetaData title="Services" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img src={Services123}
            style={{
              width: "600px",
              height: "450x",
              objectFit: "contain",
              cursor: "pointer",
              marginTop:"80px",
            }}
            />
          </div>
          <div className="col__2">   
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Engineering and Automation Department
 
              </span>
              <p>
              This department has been made to answer the needs of automated systems, conception, realization and follow-up of industrial projects:
              </p>
              <ul>
                <li>•Installation of control processes</li>
                <p>SIMATIC S7 Siemens, TIA Portal und STEP 7,  Schneider PL7 Pro...</p>
                <li>•Control panels.</li>
                <p>HMI and supervision interfaces</p>
                <li>•Migration</li>
                <p>from SIMATIC S5 to SIMATIC S7</p>
                <li>•SCADA- und DCS-control system </li>
                <p>PCS7 Siemens</p>
                <li>•Instrumention and process control</li>
                <li>•Drive engineering </li>
                <li>•Energy management </li>
              </ul>
              <br></br>
              <Link to="/contact1">
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
            </div>
          </div>
        </div>

        
      </div>
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
        <div className="col__2">
            
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Maintenance & electronics
              </span>
              <p>
              Maintenance-Team 2 Engineers and 2 technicians, more than 28 years of experience. 

              </p>
              <p>
              This department has been made to answer the following needs:
                
              </p>
              <ul>
                <li>•Repairing electronic boards .</li>
                <li>•Maintenance of industrial equipment.</li>
                <li>•Diagnosic and preventive maintenance.</li>
                <li>•Mechanical , hydrolic and pneumatic Maintenance</li>
                <li>•Factory maintenance with contract.</li>
              </ul>
              <Link to="/contact1">
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
            </div>
          </div>
          <div className="col__2">
            <img src={Servicemaintenace}
            style={{
              width: "600px",
              height: "450x",
              objectFit: "contain",
              cursor: "pointer",
              marginRight:"400px"
            }}
            />
          </div>
      
        </div>

        
      </div>
    </div>
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img src={Serviceelec}
            style={{
              width: "522px",
              height: "402x",
              objectFit: "contain",
              cursor: "pointer",
            }}
            />
          </div>
          <div className="col__2">   
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Electrical engineering department
 
              </span>
              <p>
              This department has been created to complete the activities group, the services offered are:</p>
              <ul>
                <li>•Installation and commissioning</li>
                <p>Worldwide implementation considering quality and Security standards.</p>
                <li>•Electrical cabinet wiring</li>
                <p>Processing and wiring in accordance with international Standards CE-Marking</p>
                <li>•Project study</li>
                <p>Conception, development and planning and creation of circuit diagrams using AutoCAD / Eplan. 
                  </p>
                
              </ul>
              <Link to="/contact1">
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
            </div>
          </div>
        </div>

        
      </div>
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
        <div className="col__2">
            
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
               Robotics departement
              </span>
              <p>
              Industrial robotization (palletizing, handling, welding, painting, ...)
              </p>
              <ul>
              <li>•Robotisation Industrial (handling - - Assembly - Painting - welding ...)</li>
                <li>•Robotic Workstation (X Cartesian robot axes)</li>
              </ul>
              <Link to="/contact1">
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
            </div>
          </div>
          <div className="col__2">
            <img src={Servicerobotique}
            style={{
              width: "522px",
              height: "402x",
              objectFit: "contain",
              cursor: "pointer",
            }}
            />
          </div>
      
        </div>

        
      </div>
    </div>
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img src={Services123}
            style={{
              width: "522px",
              height: "402x",
              objectFit: "contain",
              cursor: "pointer",
            }}
            />
          </div>
          <div className="col__2">   
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Mechatronics departement
 
              </span>
              <p>
              Industrial mechanical solutions :Optimization of productivity, accuracy, Security and comfort:
              </p>
              <ul>
                <li>•Design and implementation works of the production lines, assembly, packaging, and special machines.</li>
               
                <li>•Design and production various types of conveyors Automated</li>
                <li>•Motion Control servo axes</li>
                <li>•Integrated Automation Solutions / Control / Supervision / SCADA</li>
                <li>•Machine Vision System</li>
                <li>•Engine / speed drives</li>
                <li>•Pneumatic Technologies</li>
                
              </ul>
              <Link to="/contact1">
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
            </div>
          </div>
        </div>

        
      </div>
      <div className="Services__page">
        {/* 1st verse */}
        <div className="row flex">
        <div className="col__2">
            
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Training department
               
              </span>
              <p>
              This training department approved by the state (number 328/11-194/99) disposes of 4 laboratories and training rooms.
              It assures the training in several areas :

              </p>
              <ul>
             <li>•Automatisme industriels</li> 
             <li>•Electroniques industriels</li> 
             <li>•Regulation et instruments industriels</li> 
             <li>•Electricité industrielle</li> 
             <li>•Mécatronique et robotique</li> 
              </ul>
              <Link to="/contact1">
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
              <br></br>
               <Link  to={Pdf}

                style={{
                  color: "red",
                  fontSize:"25px" 
                }}
                >
                <b> Consult training catalog 2023</b>
                  </Link>
             
            </div>
          </div>
          <div className="col__2">
            <img src={Serviceformation}
            style={{
              width: "522px",
              height: "402x",
              objectFit: "contain",
              cursor: "pointer",
            }}
            />
          </div>
      
        </div>

        
      </div>
    </div>
    <Footer />
    <BottomTab />
  </div>
  
  </>
  
  );
};

export default Services;
