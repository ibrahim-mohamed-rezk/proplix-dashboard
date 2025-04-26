import React from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

//** Import Image */
import customers04 from "../../../images/customers/4.jpg";
import customers03 from "../../../images/customers/3.jpg";
import customers02 from "../../../images/customers/2.jpg";
import customers05 from "../../../images/customers/5.jpg";
import { useState } from "react";

const ReviewCard = (props) =>{
  return(
    <div className="card review-table">
      <div className="media align-items-center">
        <img className="me-3 img-fluid rounded" width={90}
          src={props.image} alt="DexignZone"
        />
        <div className="media-body d-lg-flex d-block row align-items-center">
          <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
            <span className="text-primary d-block">#C01234</span>
            <h3 className="fs-18 text-black font-w600 mb-1">
              {props.title}
            </h3>
            <span className="d-block mb-xl-0 mb-3">
              Join on {props.join}, 12:42 AM
            </span>
          </div>
          <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
            {props.para === "one" ? 
              <p>
                Friendly service Josh, Lunar and everyone at Just
                Property in Hastings deserved a big Thank You from us
                for moving us from Jakarta to Medan during the lockdown.
              </p>
            :
              <p>
                Dealing with Syamsudin and Bakri was a joy. I got in touch with Just Property after seeing a couple of properties that caught my eye. Both Syamsudin and Bakri strive to deliver a professional service and surpassed my expectations - they were not only help.
              </p>
            }
          </div>
        </div>
        <div className="media-footer d-sm-flex d-block align-items-center">
          <div className="me-5 text-xl-center text-start  ms-xl-3 mb-sm-0 mb-3 ms-0">
            <span className="bgl-primary text-primary rounded p-1 ps-2 pe-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
              EXCELENT
            </span>
            <span className="star-review d-block">
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-primary" />{" "}
              <i className="fa fa-star text-gray" />
            </span>
          </div>
          <div className="edit ms-auto">
            <Link
              to="/review"
              className="btn btn-outline-success rounded  me-2"
            >
              Approve
            </Link>
            <Link
              to="/review"
              className="btn btn-outline-danger rounded"
            >
              Reject
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const reviewtable = [
  { image: customers04, join: "26/04/2020", title: 'Robert Patilson', detail: 'one'},
  { image: customers03, join: "20/07/2021", title: 'Peter Parkur', detail: 'two'},
  { image: customers02, join: "15/01/2019", title: 'Emilia Sigh', detail: 'one'},
  { image: customers05, join: "10/08/2022", title: 'Robert Patilson', detail: 'one'},
  { image: customers03, join: "22/09/2020", title: 'Peter Parkur', detail: 'two'},
  { image: customers02, join: "01/01/2023", title: 'Emilia Sigh', detail: 'one'},
];


function Reviews() {
  const [tableData, setTableData] = useState(reviewtable);
  function SortData(){
    let value = reviewtable.filter((el)=>{
      return el.detail.includes("two")
    })  
    setTableData(value);
  }
  function SortDataSecond(){
    let value = reviewtable.filter((el)=>{
      return el.detail.includes("one")
    })  
    setTableData(value);
  }
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="me-auto  d-lg-block">
          <h4 className="mb-1">Reviews</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/review">Customer</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/review">Reviews</Link>
            </li>
          </ol>
        </div>
        <Link to="#" className="btn btn-primary rounded light">
          Refresh
        </Link>        
      </div>
      <div className="row">
        <div className="col-xl-12">
          <Tab.Container defaultActiveKey="navpills-1">
            <Nav className="nav nav-pills review-tab" variant="" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-1" onClick={()=>setTableData(reviewtable)}>All Review</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-2" onClick={SortData}>Published</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-3" onClick={SortDataSecond}>Deleted</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content pt-4 bg-white">
              <Tab.Pane eventKey="navpills-1">
                 {tableData.map((item, ind)=>(
                    <ReviewCard  image= {item.image}  title={item.title} 
                      join = {item.join}
                      para = {item.detail}
                      key={ind}
                    />
                 ))}                
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-2">
                  {tableData.map((item, ind)=>(
                      <ReviewCard  
                        image= {item.image}  
                        title={item.title} 
                        join = {item.join}
                        para = {item.detail}
                        key={ind}
                      />
                  ))}
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-3">               
                {tableData.map((item, ind)=>(
                    <ReviewCard  
                      image= {item.image}  
                      title={item.title} 
                      join = {item.join}
                      para = {item.detail}
                      key={ind}
                    />
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default Reviews;
