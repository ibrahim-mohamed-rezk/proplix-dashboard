import React from 'react';
import Select from 'react-select';
import { Uploader } from 'rsuite';

import PageTitle from '../../layouts/PageTitle';

const Rent = [
    { value: '1', label: 'For Rent' },
    { value: '2', label: 'For Sale' },
]
const beds = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
];
const options0 = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
];
const options1 = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
];
const options2 = [
    { value: '1', label: 'Blue Sky' },
    { value: '2', label: 'Zephyr' },
    { value: '3', label: 'Premiere' }
];

const inputBlog = [
    {title:'Emergency Exit', id:'label123'},
    {title:'CCTV', id:'label124'},
    {title:'Free Wi-Fi', id:'label125'},
    {title:'Free Parking In The Area', id:'label126'},
    {title:'Air Conditioning', id:'label127'},
    {title:'Security Guard', id:'label128'},
    {title:'Terrace', id:'label129'},
    {title:'Laundry Service', id:'label130'},
    {title:'Elevator Lift', id:'label131'},
    {title:'Balcony', id:'label132'},
];

const AddProperty = () => {
    return (
        <>
           <PageTitle activeMenu={"Add Property"} motherMenu={"Property"} />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Add Property</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Property Type</label>
                                        <input type="text" className="form-control" placeholder="office,villa,apartment" required="" />
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Property Status</label>
                                        <Select 
                                            options={Rent} 
                                            defaultValue={Rent[0]}
                                            className="custom-react-select"
                                            isSearchable = {false}
                                        />
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Property Price</label>
                                        <input type="text" className="form-control" placeholder="$2800" required="" />
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Max Rooms</label>
                                        <Select 
                                            options={options0} 
                                            defaultValue={options0[0]}
                                            className="custom-react-select"
                                            isSearchable = {false}
                                        /> 
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Beds</label>
                                        <Select 
                                            options={beds} 
                                            defaultValue={beds[0]}
                                            className="custom-react-select"
                                            isSearchable = {false}
                                        /> 
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Baths</label>                                       
                                        <Select 
                                            options={options1} 
                                            defaultValue={options1[0]}
                                            className="custom-react-select"
                                            isSearchable = {false}
                                        />  
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Area</label>
                                        <input type="text" className="form-control" placeholder="85 sq ft" />
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Price</label>
                                        <input type="text" className="form-control" placeholder="$3000" />
                                    </div>
                                    <div className="mb-3 col-lg-4 col-md-6">
                                        <label className="form-label">Premiere</label>
                                        <Select 
                                            options={options2} 
                                            defaultValue={options2[0]}
                                            className="custom-react-select"
                                            isSearchable = {false}
                                        /> 
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control" 
                                            defaultValue={""}
                                            rows="4" 
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-6">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" placeholder="Address of your property" />
                                    </div>
                                    <div className="mb-3 col-sm-6">
                                        <label className="form-label">Zip Code</label>
                                        <input type="number" id="zip_code" className="form-control" placeholder="Enter pin code" required="" />
                                    </div>
                                    
                                </div>
                            </form>
                            <div className="dropzone-admin mb-3">
                                <label className="form-label">Media</label>
                                <Uploader className="dropzone"  action="//jsonplaceholder.typicode.com/posts/" draggable>
                                    <div className="dz-message needsclick">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <h6>Drop files here or click to upload.</h6>
                                    </div>
                                </Uploader>
                            </div>                             
                            <form>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label className="form-label">video (mp4)</label>
                                        <input type="text" className="form-control" placeholder="mp4 video link" />
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="form-label d-block">Additional features</label>
                                        {inputBlog.map((item, ind)=>(
                                            <div className="form-check form-check-inline" key={ind}>
                                                <input type="checkbox" className="form-check-input" value="" id={item.id} />
                                                <label className="form-check-label" htmlFor={item.id}>{item.title}</label>
                                            </div>
                                        ))}                                        
                                    </div>
                                    <div className="col-sm-12 pt-3">
                                        <button type="button" className="btn btn-sm btn-primary me-2">Submit</button>
                                        <button type="button" className="btn btn-sm btn-danger light">Cancel</button>
                                    </div>									
                                </div>	
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProperty;