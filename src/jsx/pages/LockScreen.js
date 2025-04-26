import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logofull from "../../images/logo-full.png"

const LockScreen = () => {
   const nav = useNavigate()
   const submitHandler = (e) => {
      e.preventDefault();
      nav("/dashboard");
   };
   return (
      <div className="fix-wrapper">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-6">
                  <div className="card mb-0 h-auto">
                     <div className="card-body">  
                        <div  className="text-center mb-3">
                           <Link to={"/"} >
                              <img src= {logofull} alt="" className="logo-auth"/>
                           </Link>
                        </div>
                        <h4 className="text-center mb-3">Account Locked</h4>
                        <form action=""
                           onSubmit={(e) => submitHandler(e)}
                        >
                           <div className="form-group mb-4">
                              <label className="form-label">Password</label>                              
                              <div className="position-relative">
                                 <input type="password" id="dz-password" className="form-control" value="123456" />
                                 <span className="show-pass eye">
                                    <i className="fa fa-eye-slash" />
                                    <i className="fa fa-eye" />
                                 </span>
                              </div>
                           </div>
                           <div className="text-center">
                              <input type="submit" value="Unlock" className="btn btn-primary btn-block"/>
                           </div>
                        </form>
                                               
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LockScreen;
