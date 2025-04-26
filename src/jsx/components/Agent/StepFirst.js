import React from 'react';
import Select from 'react-select';

const Gender = [
    { value: '1', label: 'Gender' },
    { value: '2', label: 'Male' },
    { value: '3', label: 'Female' },
]

const StepFirst = () => {
    return (
        <>            
            <div className="mb-3 col-md-4 col-sm-6">
                <label className="form-label required">First Name </label>
                <input type="text" name="firstName" className="form-control" placeholder="Parsley" required />
            </div>
            <div className="form-group col-md-4 col-sm-6">
                <label className=" form-label required">Last Name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Montana" required />
            </div>
            <div className="form-group col-md-4 col-sm-6">
                <label className="form-label">Max Rooms</label>                
                <Select 
                    options={Gender} 
                    defaultValue={Gender[0]}
                    className="custom-react-select"
                    isSearchable = {false}
                /> 
            </div>
            <div className="form-group col-sm-6">
                <label className=" form-label required">Company Phone Number </label>
                <input type="number" name="phoneNumber" className="form-control" placeholder="(+1)408-657-9007" required />
            </div>
            <div className="form-group col-md-6">
                <label className="form-label required">Date of birth </label>
                <input  name="datepicker" className="form-control bt-datepicker" />
            </div>                            
        </>
    );
};

export default StepFirst;