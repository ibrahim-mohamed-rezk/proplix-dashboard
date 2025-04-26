import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle from '../../layouts/PageTitle';
import DonutChart from '../Omah/Home/Chart/DonutChart';

import bigimg from '../../../images/big/img1.jpg'
import profile from '../../../images/profile/profile.png'
import property1 from '../../../images/property/1.jpg'
import property2 from '../../../images/property/2.jpg'
import property3 from '../../../images/property/3.jpg'
import avat1 from '../../../images/avatar/1.jpg'

const basicInfo = [
    {title:'Age', subtitle:'24' }, 
    {title:'Customer Gender', subtitle:'Male' }, 
    {title:'City', subtitle:'New York City' }, 
    {title:'State', subtitle:'New York' }, 
    {title:'Country', subtitle:'USA' }, 
    {title:'Post Code', subtitle:'1023' }, 
    {title:'Email', subtitle:'example@gmail.com' }, 
];

const agentData = [
    {title:'Agent Name', detail:'Deangelo Sena'},
    {title:'Agency ', detail:'All American Real State'},
    {title:'Agent License', detail:'1234 5678 9101 1238'},
    {title:'Tax Number', detail:'TN305 985PL PQ856'},
    {title:'Agent City', detail:'New York'},
];


const cardProperty = [
    {image:property1, tag:'London', price:'$22000', beds:'3', bath:'2', area:'2000', name:'Thomas Djons', coloum:'col-md-6 col-sm-6'},
    {image:property2, tag:'Paris', price:'$45000', beds:'5', bath:'3', area:'5000', name:'Oliver Jean', coloum:'col-md-6 col-sm-6'},
    {image:property3, tag:'Dubai', price:'$32000', beds:'4', bath:'3', area:'3000', name:'Jane Cooper'},
];

const cardWidget = [
    {icon:'one', color:'primary', title:'Agents', number:'3280' },
    {icon:'two', color:'warning', title:'Bills', number:'2570' },
    {icon:'three', color:'danger', title:'Revenue', number:'364K' },
    {icon:'four', color:'success', title:'Patient', number:'350K' },
];

const filesBlog = [
    {name:'My Drive '},
    {name:'Client files '},
    {name:'Others '},
    {name:'Videos'},
    {name:'Images'},
    {name:'Important'},
    {name:'Doc'},
    {name:'Others'},
    {name:'Videos'},
    {name:'Images'},
    {name:'Important'},
    {name:'Doc'},
    {name:'Others'},
    {name:'My Drive'},
    {name:'Client files'},
    {name:'Others '},
    {name:'Music'},
    {name:'Features'},

];

const AgentsProfile = () => {
    return (
        <>
            <PageTitle motherMenu={"Agents"} activeMenu={"Profile"} />   
            <div className="row gx-lg-3">
                <div className="col-xl-9 col-xxl-12">
                    <div className="row gx-lg-3">
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="card overflow-hidden">
                                <div className="text-center p-3 overlay-box " style={{backgroundImage: `url(${bigimg})`}}>
                                    <div className="profile-photo">
                                        <img src={profile} width="100" className="img-fluid rounded-circle" alt="/" />
                                    </div>
                                    <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                                    <p className="text-white mb-0">Senior Manager</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {basicInfo.map((item, ind)=>(
                                        <li className="list-group-item d-flex justify-content-between" key={ind}>
                                            <span className="mb-0">{item.title}</span> <strong className="text-black"> {item.subtitle} </strong>
                                        </li>
                                    ))}										
                                </ul>
                                <div className="card-footer border-0 mt-0 border-top">								
                                    <ul className="property-social">
                                        <li><Link to={"#"}><i className="lab la-instagram"/></Link></li>
                                        <li><Link to={"#"}><i className="lab la-facebook-f"/></Link></li>
                                        <li><Link to={"#"}><i className="lab la-twitter"/></Link></li>
                                    </ul>	
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-sm-12">
                            <div className="card overflow-hidden">
                                <div className="card-header">
                                    <h4 className="card-title">Agent Detail</h4>
                                </div>
                                <div className="card-body">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have. Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata. There are many variations of passages of Lorem Ipsum available, but the majority have.</p>                                    
                                    <table className="check-tbl mb-2">
                                        <tbody>
                                            {agentData.map((item, ind)=>(
                                                <tr key={ind}>
                                                    <td><i className="las la-check-circle" /> {item.title} :</td>
                                                    <td className="tb-para">{item.detail}</td>
                                                </tr>
                                            ))}                                            
                                        </tbody>
                                    </table>
                                    <div className="row border-top">
                                        <h4 className="title my-3">Property Status</h4>
                                        <div className="col-lg-6">
                                            <div className="card property-card border">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body me-2">	
                                                            <h2 className="fs-28 text-black font-w600">2,356</h2>
                                                            <p className="property-p mb-0 text-black font-w500">For Sale</p>
                                                            <span className="fs-13">Target 3k/month</span>
                                                        </div>
                                                        <div className="d-inline-block position-relative donut-chart-sale">
                                                            <DonutChart 
                                                                backgroundColor="rgb(60, 76, 184)"
                                                                backgroundColor2="rgba(236, 236, 236, 1)"
                                                                value="60"
                                                            />                                                            
                                                            <small className="text-primary">60%</small>
                                                            <span className="circle bgl-primary"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card property-card border">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body me-2">	
                                                            <h2 className="fs-28 text-black font-w600">2,206</h2>
                                                            <p className="property-p mb-0 text-black font-w500">For Rent</p>
                                                            <span className="fs-13">Target 3k/month</span>
                                                        </div>
                                                        <div className="d-inline-block position-relative donut-chart-sale">
                                                            <DonutChart 
                                                                backgroundColor="rgb(55, 209, 90)"
                                                                backgroundColor2="rgba(236, 236, 236, 1)"
                                                                value="90"
                                                            />                                                              
                                                            <small className="text-success">90%</small>
                                                            <span className="circle bgl-success"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="title">Active Listing</h4>
                            {cardProperty.map((item, ind)=>(
                                <div className={`col-lg-4 m-b30 ${item.coloum}`} key={ind}>
                                    <div className="property-card style-1">
                                        <div className="dz-media">
                                            <ul>
                                                <li className="badge badge-sm badge-primary light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {item.tag}
                                                </li>
                                                <li className="rent badge badge-sm badge-primary">For Rent</li>
                                            </ul>
                                            <img src={item.image} alt="/" />
                                        </div>
                                        <div className="dz-content">
                                            <h3 className="title">{item.price}</h3>
                                            <div className="dz-meta">
                                                <ul>
                                                    <li>
                                                        <Link to={"#"}>
                                                            <svg fill="#000000" width="24px" height="24px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 10C3.355469 10 2 11.355469 2 13L2 28.1875C2.003906 28.25 2.015625 28.3125 2.03125 28.375C2.03125 28.386719 2.03125 28.394531 2.03125 28.40625C1.582031 29.113281 1.214844 29.867188 0.9375 30.6875C0.316406 32.519531 0.0507813 34.621094 0 37L0 38C0 38.03125 0 38.0625 0 38.09375L0 50L7 50L7 46C7 45.167969 7.203125 44.734375 7.46875 44.46875C7.734375 44.203125 8.167969 44 9 44L41 44C41.832031 44 42.265625 44.203125 42.53125 44.46875C42.796875 44.734375 43 45.167969 43 46L43 50L50 50L50 38.15625C50.003906 38.105469 50.003906 38.050781 50 38C50 37.65625 50.007813 37.332031 50 37C49.949219 34.621094 49.683594 32.519531 49.0625 30.6875C48.785156 29.875 48.414063 29.136719 47.96875 28.4375C47.988281 28.355469 48 28.273438 48 28.1875L48 13C48 11.355469 46.644531 10 45 10 Z M 5 12L45 12C45.5625 12 46 12.4375 46 13L46 26.15625C45.753906 25.949219 45.492188 25.75 45.21875 25.5625C44.550781 25.101563 43.824219 24.671875 43 24.3125L43 20C43 19.296875 42.539063 18.75 42.03125 18.40625C41.523438 18.0625 40.902344 17.824219 40.125 17.625C38.570313 17.226563 36.386719 17 33.5 17C30.613281 17 28.429688 17.226563 26.875 17.625C26.117188 17.820313 25.5 18.042969 25 18.375C24.5 18.042969 23.882813 17.820313 23.125 17.625C21.570313 17.226563 19.386719 17 16.5 17C13.613281 17 11.429688 17.226563 9.875 17.625C9.097656 17.824219 8.476563 18.0625 7.96875 18.40625C7.460938 18.75 7 19.296875 7 20L7 24.3125C6.175781 24.671875 5.449219 25.101563 4.78125 25.5625C4.507813 25.75 4.246094 25.949219 4 26.15625L4 13C4 12.4375 4.4375 12 5 12 Z M 16.5 19C19.28125 19 21.34375 19.234375 22.625 19.5625C23.265625 19.726563 23.707031 19.925781 23.90625 20.0625C23.988281 20.117188 23.992188 20.125 24 20.125L24 22C17.425781 22.042969 12.558594 22.535156 9 23.625L9 20.125C9.007813 20.125 9.011719 20.117188 9.09375 20.0625C9.292969 19.925781 9.734375 19.726563 10.375 19.5625C11.65625 19.234375 13.71875 19 16.5 19 Z M 33.5 19C36.28125 19 38.34375 19.234375 39.625 19.5625C40.265625 19.726563 40.707031 19.925781 40.90625 20.0625C40.988281 20.117188 40.992188 20.125 41 20.125L41 23.625C37.441406 22.535156 32.574219 22.042969 26 22L26 20.125C26.007813 20.125 26.011719 20.117188 26.09375 20.0625C26.292969 19.925781 26.734375 19.726563 27.375 19.5625C28.65625 19.234375 30.71875 19 33.5 19 Z M 24.8125 24C24.917969 24.015625 25.019531 24.015625 25.125 24C25.15625 24 25.1875 24 25.21875 24C35.226563 24.015625 41.007813 25.0625 44.09375 27.1875C45.648438 28.257813 46.589844 29.585938 47.1875 31.34375C47.707031 32.875 47.917969 34.761719 47.96875 37L2.03125 37C2.082031 34.761719 2.292969 32.875 2.8125 31.34375C3.410156 29.585938 4.351563 28.257813 5.90625 27.1875C8.992188 25.058594 14.785156 24.011719 24.8125 24 Z M 2 39L48 39L48 48L45 48L45 46C45 44.832031 44.703125 43.765625 43.96875 43.03125C43.234375 42.296875 42.167969 42 41 42L9 42C7.832031 42 6.765625 42.296875 6.03125 43.03125C5.296875 43.765625 5 44.832031 5 46L5 48L2 48Z"></path>
                                                            </svg>  
                                                            {item.beds} Beds
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to={"#"}>
                                                            <svg fill="#000000" width="24px" height="24px" viewBox="0 -16.33 127.9 127.9" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                                                            style={{enableBackground:"new 0 0 127.9 95.25"}}>
                                                                <g><path d="M98.97,22.32l-0.06-0.08c-0.31-0.45-0.93-0.55-1.37-0.24l-7.6,5.32c-0.45,0.31-0.55,0.93-0.24,1.37l0.06,0.08 c0.31,0.45,0.93,0.55,1.37,0.24l7.6-5.32C99.17,23.38,99.28,22.76,98.97,22.32L98.97,22.32L98.97,22.32z M119.01,52.32l-4.12,19.22 c-1.02,4.78-3.33,8.43-6.61,10.93c-2.27,1.73-4.98,2.88-8.03,3.45l2.7,5.78c0.58,1.25,0.04,2.74-1.21,3.32 c-1.25,0.58-2.74,0.04-3.32-1.21l-3.5-7.48H35.1l-3.5,7.48c-0.58,1.25-2.07,1.79-3.32,1.21c-1.25-0.58-1.79-2.07-1.21-3.32 l2.55-5.46c-3.9-0.34-7.1-1.59-9.68-3.73c-3.01-2.5-5.07-6.13-6.3-10.86L8.57,52.32H4.61c-1.26,0-2.41-0.52-3.25-1.35l0-0.01 l-0.01,0.01C0.52,50.13,0,48.98,0,47.71v-4.19c0-1.27,0.52-2.42,1.35-3.26c0.06-0.06,0.13-0.13,0.2-0.18 c0.81-0.73,1.88-1.17,3.05-1.17h0.61c0.17-1.82,0.87-3.54,1.95-5.04c1.1-1.54,2.62-2.85,4.35-3.75c1.74-0.91,3.71-1.42,5.7-1.36 c1.75,0.06,3.49,0.54,5.1,1.56c0.7-1.02,1.57-1.93,2.57-2.68c1.96-1.47,4.41-2.35,7.06-2.35c2.2,0,4.26,0.6,6.01,1.64 c1.37,0.81,2.55,1.9,3.47,3.18c2.79,0.22,5.31,1.41,7.2,3.23c1.55,1.5,2.67,3.42,3.16,5.56h67.25V14.1 c-1.46-7.17-5.6-9.12-11.13-8.33c2.49,4.34,2.17,8.75-1.36,13.25c0.45,0.73,0.41,1.53-0.08,2.38l-1.1,1.27 c-0.44,0.45-0.99,0.49-1.7-0.08L86.76,5.52c-0.46-0.55-0.37-1.03,0.17-1.45c1.2-1.47,1.35-1.72,3.48-1.36 c4.74-3.08,9.25-3.63,13.5-1.19c10.67-4.38,19.75,1.12,20.98,12.32l0,0V39.2c0.63,0.23,1.19,0.6,1.65,1.06 c0.83,0.83,1.35,1.99,1.35,3.26v4.19c0,1.27-0.52,2.42-1.35,3.26c-0.83,0.83-1.99,1.35-3.25,1.35H119.01L119.01,52.32z M89.4,14.1 l-0.06-0.08c-0.31-0.45-0.93-0.55-1.37-0.24l-7.6,5.32c-0.45,0.31-0.55,0.93-0.24,1.37l0.06,0.08c0.31,0.45,0.93,0.55,1.37,0.24 l7.6-5.32C89.61,15.16,89.71,14.54,89.4,14.1L89.4,14.1L89.4,14.1z M85.03,9.7l-0.06-0.08c-0.31-0.45-0.93-0.55-1.37-0.24 l-7.6,5.32c-0.45,0.31-0.55,0.93-0.24,1.37l0.06,0.08c0.31,0.45,0.93,0.55,1.37,0.24l7.6-5.32C85.23,10.76,85.34,10.14,85.03,9.7 L85.03,9.7L85.03,9.7z M93.76,18.35l-0.06-0.08c-0.31-0.45-0.93-0.55-1.37-0.24l-7.6,5.32c-0.45,0.31-0.55,0.93-0.24,1.37 l0.06,0.08c0.31,0.45,0.93,0.55,1.37,0.24l7.61-5.32C93.96,19.41,94.07,18.8,93.76,18.35L93.76,18.35L93.76,18.35z M10.29,38.91 h36.25c-0.32-0.74-0.79-1.4-1.37-1.95c-1.19-1.15-2.84-1.86-4.67-1.86c-0.28,0,0.02-0.01-0.17-0.01l-0.17,0.01 c-0.94,0.04-1.87-0.45-2.33-1.34c-0.54-1.03-1.38-1.9-2.41-2.51c-1-0.59-2.19-0.94-3.46-0.94c-1.54,0-2.95,0.5-4.06,1.33 c-1.11,0.84-1.94,2.01-2.3,3.35c-0.12,0.51-0.41,0.99-0.85,1.35c-1.07,0.87-2.65,0.71-3.52-0.36c-1.23-1.51-2.71-2.17-4.16-2.22 c-1.1-0.04-2.22,0.26-3.23,0.79c-1.02,0.54-1.92,1.32-2.59,2.24C10.78,37.45,10.44,38.17,10.29,38.91L10.29,38.91z M8.5,43.93 c-0.4,0.1-0.8,0.09-1.18,0h-2.3v3.36h117.86v-3.36H8.5L8.5,43.93z M13.74,52.32l4.74,18.07c0.96,3.68,2.48,6.45,4.66,8.25 c2.13,1.77,5,2.67,8.73,2.67h63.75c3.86,0,7.15-0.95,9.61-2.82c2.34-1.78,3.99-4.45,4.75-7.99l3.9-18.18H13.74L13.74,52.32z"></path>
                                                                </g>
                                                            </svg> 
                                                            {item.bath} Bath 
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to={"#"}>
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 4H4V7" stroke="#3B4CB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M17 4H20V7" stroke="#3B4CB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M7 20H4V17" stroke="#3B4CB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M17 20H20V17" stroke="#3B4CB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                            {item.area} Sqft 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have. There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                                            <hr />
                                            <div className="dz-footer">
                                                <div className="property-card">
                                                    <div className="property-media">
                                                        <img src={avat1} alt="/" />
                                                    </div>
                                                    <h6 className="title mb-0">{item.name}</h6>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link to={"#"}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"#"}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"#"}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}                       
                    </div>
                </div>
                <div className="col-xl-3 col-xxl-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">My Files</h4>
                            <button className="btn-sm btn btn-primary">Add New</button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {cardWidget.map((data, ind)=>(
                                    <div className="col-xl-12 col-xxl-3 col-md-6" key={ind}>
                                        <div className="widget-stat card border">
                                            <div className="card-body p-3">
                                                <div className="media ai-icon">
                                                    <span className={`me-3 text-${data.color} bgl-${data.color}`}>           
                                                        {data.icon === "one" ?
                                                            <svg id="icon-customers" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="12" cy="7" r="4"></circle>
                                                            </svg>
                                                        :
                                                        data.icon === "two" ?
                                                            <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                                <polyline points="10 9 9 9 8 9"></polyline>
                                                            </svg>
                                                        :
                                                        data.icon === "three" ?
                                                            <svg id="icon-revenue" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
                                                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                                            </svg>
                                                        :
                                                        
                                                            <svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database">
                                                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                                            </svg>
                                                        }
                                                    </span>
                                                    <div className="media-body">
                                                        <p className="mb-1">{data.title}</p>
                                                        <h4 className="mb-0">{data.number}</h4>
                                                    </div>
                                                    <div className={`badge badge-${data.color} badge-sm`}>+3.5%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between">
                                    <h5 className="title">Other files</h5>
                                    <Link to={"#"}> See All {" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B4CB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                    </Link>
                                </div>
                                <ul className="file-listing">
                                    {filesBlog.map((item, ind)=>(                                        
                                        <li key={ind}>
                                            <Link to={"#"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> {item.name} <span><i className="fa-solid fa-ellipsis-vertical" /></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={"#"} className="text-center text-primary mt-2">See All Files</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgentsProfile;