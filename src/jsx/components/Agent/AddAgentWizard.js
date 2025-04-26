import React,{useState} from 'react';

import PageTitle from '../../layouts/PageTitle';
import StepSecond from './StepSecond';
import StepFirst from './StepFirst';
import ThirdStep from './ThirdStep';

const AddAgentWizard = () => {
    const [goSteps, setGoSteps] = useState(0);
    return (
        <>
            <PageTitle activeMenu="Add Agent Wizard" motherMenu="Agents" />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Add Agent Wizard</h4>
                        </div>
                        <div className="card-body wizard-box">
                            <div className="wizard-step-container">
                                <ul className="wizard-steps">
                                    <li className={`step-container step-1 ${goSteps === 0 ? 'active' : ''}`}
                                        onClick={() => setGoSteps(0)}
                                    >
                                        <div className="media">
                                            <div className="step-icon">
                                                <i data-feather="check"></i>
                                                <span>1</span>
                                            </div>
                                            <div className="media-body">
                                                <h5>Get started</h5>
                                                <h6>Account information</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`step-container step-2 ${goSteps === 1 ? 'active' : ''}`}
                                        onClick={() => setGoSteps(1)}
                                    >
                                        <div className="media">
                                            <div className="step-icon">
                                                <i data-feather="check"></i>
                                                <span>2</span>
                                            </div>
                                            <div className="media-body">
                                                <h5>Login details</h5>
                                                <h6>Set your email</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`step-container step-3 ${goSteps === 2 ? 'active' : ''}`}
                                        onClick={() => setGoSteps(2)}
                                    >
                                        <div className="media">
                                            <div className="step-icon">
                                                <i data-feather="check"></i>
                                                <span>3</span>
                                            </div>
                                            <div className="media-body">
                                                <h5>Upload files</h5>
                                                <h6>Successfully submitted</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="wizard-form-details log-in">
                                    {goSteps === 0 && (
                                        <div className="wizard-step-1 d-block">                                            
                                            <form className="row" id="needs-validation">
                                                <StepFirst />
                                                <div className="next-btn text-end col-sm-12"
                                                    onClick={() => setGoSteps(1)}
                                                >
                                                    <button type="submit" className="btn btn-primary next1 btn-sm">
                                                        Next 
                                                        <i className="fas fa-arrow-right ms-2" />
                                                    </button>
                                                </div>
                                             </form>
                                        </div>
                                    )}
                                    {goSteps === 1 && (
                                        <div className="wizard-step-2">
                                            <form className="row" id="needs-validation1">
                                                <StepSecond />                                        
                                                <div className="next-btn d-flex col-sm-12">
                                                    <button type="button" className="btn btn-primary prev1 btn-sm"
                                                        onClick={() => setGoSteps(0)}
                                                    >
                                                        <i className="fas fa-arrow-left me-2" />
                                                        Previous
                                                    </button>
                                                    <button type="submit" className="btn btn-primary next2 btn-sm"
                                                        onClick={() => setGoSteps(2)}
                                                    >
                                                        Next 
                                                        <i className="fas fa-arrow-right ms-2" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                    {goSteps === 2 && (   
                                        <div className="wizard-step-3">
                                            <ThirdStep />
                                            <div className="next-btn d-flex">
                                                <button type="button" className="btn btn-primary prev2 btn-sm"
                                                    onClick={() => setGoSteps(1)}
                                                >
                                                    <i className="fas fa-arrow-left me-2" /> Previous
                                                </button>
                                                <button type="button" className="btn btn-primary next3 btn-sm"
                                                    onClick={() => setGoSteps(2)}
                                                >submit</button>
                                            </div>   
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddAgentWizard;