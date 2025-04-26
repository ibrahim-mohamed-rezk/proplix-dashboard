import React from 'react';

const StepSecond = () => {
    return (
        <>           
            <div className="form-group col-md-4 col-sm-6">
                <label className="form-label required">Email Address </label>
                <input type="text" className="form-control" id="validationCustom02"  placeholder="Your valid email.." required />
            </div>
            <div className="form-group col-md-4 col-sm-6">
                <label className="form-label required">Password </label>
                <input type="password" className="form-control" id="validationCustom03" placeholder="Choose a safe one.." required />
            </div>
            <div className="form-group col-md-4">
                <label className="form-label required">Confirm Password </label>
                <input type="password" className="form-control" id="validationCustom04" placeholder="Choose a safe one.." required />
            </div>
            <div className="form-group col-sm-12">
                <label className="form-label required">Description</label>
                <textarea className="form-control" id="validationCustom010"  rows="5" defaultValue="What would you like to see?" required></textarea>
            </div>
            <div className="form-group col-sm-6">
                <label className="form-label required">Address</label>
                <input type="text" className="form-control" id="validationCustom011" placeholder="Enter your Address" required />
            </div>
            <div className="form-group col-sm-6">
                <label className="form-label required">Zip code</label>
                <input type="number" id="zip_code" className="form-control" placeholder="Enter pin code" required="" />
            </div>                       
        </>
    );
};

export default StepSecond;