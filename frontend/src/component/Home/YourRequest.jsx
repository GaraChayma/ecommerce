import React, { useRef, useState } from 'react'
import MetaData from '../../more/Metadata';
import "./request.css";
import emailjs from "@emailjs/browser";
import BottomTab from '../../more/BottomTab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Footer from "./footer";


const Request = ({history}) => {

    const [done, setDone] = useState(false);
    const [value, setValue] = useState()
    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_exy8zvh', 'template_e4b2f4j', formRef.current, 'YFhW4RlIb5R9fyhL_')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
       <>
       <MetaData title="Request"/>
       <Header />
       <div 
       className='Request'
       style={{
           width:"80%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
        <center>
           <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"900",
                 color:"tomato"
               }}>what are you looking for?</h2>
           <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"900",
                 color:"red"
               }}>how can I help you ?               </h2>
               
            </center>
           <div>
             
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
                    }} ref={formRef}
                    onSubmit={handleSubmit} >
                         <center>
                   <input type="text" placeholder='Write your Name ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                      }}name='user__name'
                   />
                   <input type="email" placeholder='write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__email'

                   />
                   <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        required
                        containerstyle={{
                            border: "none"
                          }}

                        style={{
                            border:"none",
                            outline:"none",
                            width:"100%",
                            borderBottom:"1px solid #3BB77E",
                             margin:"10px 0",
                            fontSize:"1.2vmax",
                            height:"40px"
                        }}
                        name='user__Phone'
                        
                     />
              
                   
                   <input type="text" placeholder='Write your Product Name ...' 
                    required
                       style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                      }}name='Product__name'
                   />
                   <input type="text" placeholder='Write your Reference Product...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                      }}name='product__ref'
                   />
                    </center>

                    <input type="text" placeholder='Write a Subject ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__subject'
                   />
                   {/* <input type="email" placeholder='write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__email'

                   /> */}
                   <textarea cols="30" rows="5" required placeholder='write your message ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                  }}
                   name='user__message'
                   ></textarea>
                  
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"tomato",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Send a request</button>
                   {done && toast.success("Thanks for your report we will reply it in very soon...")}
                   
               </form>
               <center>
               <p style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"60",
                 color:"Black"
               }}>we are happy to help you <br></br>
               and find your desired product</p>
               </center>
               <div className='animation'>

               </div>
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
        <Footer />
       <BottomTab />
       </>
    )
}

export default Request