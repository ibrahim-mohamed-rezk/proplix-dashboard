import React from 'react';
import {Link} from 'react-router-dom';

import user1 from './../../../images/users/pic1.jpg';
import user2 from './../../../images/users/pic2.jpg';
import user3 from './../../../images/users/pic3.jpg';
import user4 from './../../../images/users/pic4.jpg';
import user5 from './../../../images/users/pic5.jpg';
import user6 from './../../../images/users/pic6.jpg';

const cardView = [
    {name:'Thomas Djons', image:user1, postion:'Senior Developer', postioncolor:'primary', changebtn:'success' },
    {rounde: "yes", name:'Oliver Jean', image:user2, postion:'Junior Developer', postioncolor:'info', changebtn:'primary' },
    {name:'Post Melone', option:"logo", short:"PM",postion:'Senior Designer', postioncolor:'success',changebtn:'secondary' },
    {rounde: "yes",name:'Kevin Mandala',  option:"logo", short:"KM",postion:'Junior Developer', postioncolor:'danger', changebtn:'info' },
    {name:'Mc. Kowalski', image:user6, postion:'Php Developer', postioncolor:'info', changebtn:'info light' },
    {name:'Rio Fernandez', image:user3, postion:'Python Developer', postioncolor:'danger', changebtn:'success' },
    {name:'Chintya Laudia', image:user1, postion:'NodeJs Developer', postioncolor:'warning', changebtn:'warning' },
    {name:'James Junaidi', image:user4, postion:'Senior Developer', postioncolor:'primary', changebtn:'primary light' },
    {name:'Keanu Repes', image:user5, postion:'Senior Developer', postioncolor:'info', changebtn:'outline-danger' },
    {name:'Tonni Sblak', image:user1, postion:'Senior Developer', postioncolor:'danger', changebtn:'outline-success' },
    {name:'John Kipli',  option:"logo", short:"JK",postion:'Senior Developer', postioncolor:'warning', changebtn:'outline-warning' },
    {name:'Monalisa',  option:"logo", short:"PM",  postion:'Senior Head', postioncolor:'primary', changebtn:'outline-info' },
];

const AllAgents = () => {
    return (
        <>
            <div className="row">					
                <div className="form-head page-titles d-flex  align-items-center">
                    <div className="me-auto  d-lg-block d-block">
                        <h4 className="mb-1">Agent Card View</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active"><Link to={"#"}>All Agents</Link></li>
                            <li className="breadcrumb-item"><Link to={"#"}>All agents listing</Link></li>
                        </ol>
                    </div>
                    <Link to={"/add-agent"} className="btn btn-primary light">+ Add Agent</Link>
                </div>   
                {cardView.map((item, ind)=>(
                    <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-6" key={ind}>
                        <div className="card user-card">
                            <div className="card-body pb-0">
                                <div className="d-flex mb-3 align-items-center">
                                    <div className={`dz-media me-3 ${item.rounde === "yes" ? "rounded-circle" : ''}`}>
                                        {
                                            item.option === "logo" ? 
                                                <span className="icon-placeholder bg-primary text-white">{item.short}</span>
                                            :
                                                <img src={item.image} alt="dexignzone" />
                                        }
                                    </div>
                                    <div>
                                        <h5 className="title mb-0"><Link to={"/agent-profile"}>{item.name}</Link></h5>
                                        <span className={`text-${item.postioncolor}`}>{item.postion}</span>
                                    </div>
                                </div>
                                {
                                  item.option === "logo" ? 
                                    <p className="fs-12">Maintain inventory of supplies and order new stock as needed Maintain inventory stock</p>
                                    :
                                    <p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
                                }
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Email</span> :
                                        <span className="text-black ms-2">example@gmail.com</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Phone</span> :
                                        <span className="text-black ms-2">1238545644</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Location</span> :
                                        <span className="text-black desc-text ms-2">Indonasia</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to={"#"} className={`btn btn-${item.changebtn} btn-xs`}>Write Message</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav>
                <ul className="pagination pagination-gutter pagination-primary no-bg">
                    <li className="page-item page-indicator">
                        <Link to={"#"} className="page-link">
                            <i className="la la-angle-left" />
                        </Link>
                    </li>
                    <li className="page-item "><Link to={"#"} className="page-link">1</Link></li>
                    <li className="page-item active"><Link to={"#"} className="page-link">2</Link></li>
                    <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                    <li className="page-item"><Link to={"#"} className="page-link">4</Link></li>
                    <li className="page-item page-indicator">
                        <Link to={"#"} className="page-link">
                            <i className="la la-angle-right" />
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default AllAgents;