import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//** Import Image */
import customers4 from "../../../images/customers/4.jpg";
import customers3 from "../../../images/customers/3.jpg";
import customers2 from "../../../images/customers/2.jpg";
import customers1 from "../../../images/customers/1.jpg";

function ProfileDropdown(){
  return(
    <Dropdown className="dropdown media-dropdown mt-auto mb-auto me-auto">
        <Dropdown.Toggle variant="" className="btn-link i-false p-0">
          <Link to="#" className="btn btn-outline-primary rounded">
            Show Order History
            <svg className="ms-2" width={12} height={6} viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 -5.24537e-07L6 6L12 0" fill="#3B4CB8" />
            </svg>
          </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-right rounded">
          <div className="media mb-4">
            <img className="me-sm-4 me-3 img-fluid rounded" width={90} src={customers4} alt="DexignZone" />
            <div className="media-body">
              <h4 className="fs-16 text-black font-w600 mb-0">
                James Humbly
              </h4>
              <span className="fs-14 d-block mb-3">
                2 June 2018 - 4 June 2019
              </span>
              <div className="star-icons">
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18" />
              </div>
            </div>
          </div>
          <div className="media">
            <img
              className="me-sm-4 me-3 img-fluid rounded"
              width={90}
              src={customers3}
              alt="DexignZone"
            />
            <div className="media-body">
              <h4 className="fs-16 text-black font-w600 mb-0">
                James Humbly
              </h4>
              <span className="fs-14 d-block mb-3">
                2 June 2018 - 4 June 2019
              </span>
              <div className="star-icons">
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18 me-1" />
                <i className="las la-star fs-18" />
              </div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
  )
}

function CustomerList() {
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="me-auto  d-lg-block">
          <h4 className="mb-1">Customer</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/customer-list">Customer</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/customer-list">Customer List</Link>
            </li>
          </ol>
        </div>
        <Link
          to="/customer-list"
          className="btn btn-primary rounded light"
        >
          Refresh
        </Link>
        
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="row border-bottom mx-0 pt-4 px-2 align-items-center ">
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                  <img
                    className="me-sm-4 me-3 img-fluid rounded"
                    width={90}
                    src={customers4}
                    alt="DexignZone"
                  />
                  <div className="media-body">
                    <span className="text-primary d-block">#C01234</span>
                    <h4 className="mb-1">
                      Robert Patilson
                    </h4>
                    <span className="d-block mb-lg-0 mb-0">
                      Join on 02/05/2020, 12:42 AM
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                  <small className="mb-2 d-block">Location</small>
                  <span className="text-black font-w600">
                    TY35 Avenue GGLondon Center
                  </span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                  <small className="mb-2 d-block">Phone Number</small>
                  <span className="text-black font-w600">+51 1234 5678</span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                  <small className="mb-2 d-block">Email Address</small>
                  <span className="text-black font-w600">info@example.com</span>
                </div>
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6 mb-sm-4 mb-4 d-flex ">
                  <ProfileDropdown />
                  <Dropdown className="dropdown ms-4  mt-auto mb-auto">
                    <Dropdown.Toggle
                      className="btn-link i-false p-0"
                      data-toggle="dropdown"
                      variant=""
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item
                        className="dropdown-item"
                        to="#"
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="text-danger"
                        to="#"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="row border-bottom mx-0 pt-4 px-2 align-items-center ">
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                  <img
                    className="me-sm-4 me-3 img-fluid rounded"
                    width={90}
                    src={customers3}
                    alt="DexignZone"
                  />
                  <div className="media-body">
                    <span className="text-primary d-block">#B85651</span>
                    <h4 className="mb-1">
                      Marry Parkin
                    </h4>
                    <span className="d-block mb-lg-0 mb-0">
                      Join on 02/06/2021, 12:42 AM
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                  <small className="mb-2 d-block">Location</small>
                  <span className="text-black font-w600">
                    KL35 BodyClub Paris Center
                  </span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                  <small className="mb-2 d-block">Phone Number</small>
                  <span className="text-black font-w600">+41 1234 5678</span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                  <small className="mb-2 d-block">Email Address</small>
                  <span className="text-black font-w600">info@example.com</span>
                </div>
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6 mb-sm-4 mb-4 d-flex ">
                  <ProfileDropdown />
                  <Dropdown className="dropdown ms-4  mt-auto mb-auto">
                    <Dropdown.Toggle
                      className="btn-link i-false p-0"
                      data-toggle="dropdown"
                      variant=""
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                  <img
                    className="me-sm-4 me-3 img-fluid rounded"
                    width={90}
                    src={customers2}
                    alt="DexignZone"
                  />
                  <div className="media-body">
                    <span className="text-primary d-block">#DF5236</span>
                    <h4 className="mb-1">
                      Kamlin Roy
                    </h4>
                    <span className="d-block mb-lg-0 mb-0">
                      Join on 01/01/2022, 12:42 AM
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                  <small className="mb-2 d-block">Location</small>
                  <span className="text-black font-w600">
                    TL35 Grand Hotel France
                  </span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                  <small className="mb-2 d-block">Phone Number</small>
                  <span className="text-black font-w600">+71 1234 5678</span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                  <small className="mb-2 d-block">Email Address</small>
                  <span className="text-black font-w600">info@example.com</span>
                </div>
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6 mb-sm-4 mb-4 d-flex ">
                  <ProfileDropdown />
                  <Dropdown className="dropdown ms-4  mt-auto mb-auto">
                    <Dropdown.Toggle
                      className="btn-link i-false p-0"
                      data-toggle="dropdown"
                      variant=""
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                  <img
                    className="me-sm-4 me-3 img-fluid rounded"
                    width={90}
                    src={customers1}
                    alt="DexignZone"
                  />
                  <div className="media-body">
                    <span className="text-primary d-block">#PL562H</span>
                    <h4 className="mb-1">
                        Rony kally
                    </h4>
                    <span className="d-block mb-lg-0 mb-0">
                      Join on 03/08/2022, 12:42 AM
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                  <small className="mb-2 d-block">Location</small>
                  <span className="text-black font-w600">
                    TY35 Avenue GGLondon Center
                  </span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                  <small className="mb-2 d-block">Phone Number</small>
                  <span className="text-black font-w600">+91 1234 5678</span>
                </div>
                <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                  <small className="mb-2 d-block">Email Address</small>
                  <span className="text-black font-w600">info@example.com</span>
                </div>
                <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6 mb-sm-4 mb-4 d-flex ">
                  <ProfileDropdown />
                  <Dropdown className="dropdown ms-4  mt-auto mb-auto">
                    <Dropdown.Toggle
                      className="btn-link i-false p-0"
                      data-toggle="dropdown"
                      variant=""
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        to="/customer-list"
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
