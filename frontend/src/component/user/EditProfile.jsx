import React, {useState, useEffect,Fragment } from "react";
import "./EditProfile.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../Actions/userAction";

import MetaData from "../../more/Metadata";
import { UPDATE_PROFILE_RESET } from "../../constans/userContans";
import { ToastContainer, toast } from 'react-toastify';
import BottomTab from "../../more/BottomTab";
//import 'react-toastify/dist/ReactToastify.css';
const EditProfile = ({history}) => {
    const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.user
  );

  const {error, isUpdated } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 


  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const data = {name,email};
    //console.log(data);
    dispatch(updateProfile(data));
  };


  useEffect(() => {
      if(user){
          setName(user.name);
          setEmail(user.email);
        
      }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      
      
     dispatch({
      type: UPDATE_PROFILE_RESET,
  })
  toast.success("Profile updated successfully");
  //dispatch(loadUser());

      history.push("/me");

      
    }
  }, [dispatch, error,history, isUpdated,user]);


    return (
       
            <>
             <MetaData title="Update Profile" />
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

               
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
              
            </div>
            <BottomTab />
          </div>
         
            </>
              

        )}
        
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
        

        
        
        

export default EditProfile
 