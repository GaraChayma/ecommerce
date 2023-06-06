import React, { Fragment, useState, useEffect } from "react";
import "./UpdatePassword.css";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../more/Metadata";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { clearErrors, updatePassword } from "../../Actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constans/userContans";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BottomTab from "../../more/BottomTab";

const UpdatePassword = ({ history }) => {

  const dispatch = useDispatch();

  const { error, isUpdated } = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [done, setDone] = useState(false);

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    const data = {oldPassword,newPassword,confirmPassword};
   // console.log(data);
   // console.log(oldPassword,newPassword,confirmPassword);
   
    dispatch(updatePassword(data));  
  };


 
  

  useEffect(() => {
    try{
      if (isUpdated) {
        toast.success("Password Updated Successfully")
        
        history.push(`/me`);
        dispatch({
          type: UPDATE_PASSWORD_RESET,
        });
        
      }
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
    }
    catch(error){
      console.log(error);
    }
   

  
    
  }, [dispatch, error,history, isUpdated]);

  return (
    
        <>
          <MetaData title="Change Password" />
          <div className="updatePasswordContainer">
            <div className="updatePasswordBox">
              <h2 className="updatePasswordHeading">Update Profile</h2>

              <form
                className="updatePasswordForm"
                onSubmit={updatePasswordSubmit}
              >
                <div className="loginPassword">
                  <VpnKeyIcon />
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn"
                />
              </form>
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
       <BottomTab />
        </>
      )}
      
    

export default UpdatePassword