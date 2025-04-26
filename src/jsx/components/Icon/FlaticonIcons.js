import React,{useReducer} from 'react';
import { Modal } from 'react-bootstrap';

import PageTitle from '../../layouts/PageTitle';

const svgBlogData = [
    {Iconname : 'flaticon-381-add'},
    {Iconname : 'flaticon-381-add-1'},
    {Iconname : 'flaticon-381-add-2'},
    {Iconname : 'flaticon-381-add-3'},
    {Iconname : 'flaticon-381-alarm-clock'},
    {Iconname : 'flaticon-381-alarm-clock-1'},
    {Iconname : 'flaticon-381-album'},
    {Iconname : 'flaticon-381-album-1'},
    {Iconname : 'flaticon-381-album-2'},
    {Iconname : 'flaticon-381-album-3'},
    {Iconname : 'flaticon-381-app'},
    {Iconname : 'flaticon-381-archive'},
    {Iconname : 'flaticon-381-back'},
    {Iconname : 'flaticon-381-back-1'},
    {Iconname : 'flaticon-381-back-2'},
    {Iconname : 'flaticon-381-background'},
    {Iconname : 'flaticon-381-background-1'},
    {Iconname : 'flaticon-381-battery'},
    {Iconname : 'flaticon-381-battery-1'},
    {Iconname : 'flaticon-381-battery-2'},
    {Iconname : 'flaticon-381-battery-3'},
    {Iconname : 'flaticon-381-battery-4'},
    {Iconname : 'flaticon-381-battery-5'},
    {Iconname : 'flaticon-381-battery-6'},
    {Iconname : 'flaticon-381-battery-7'},
    {Iconname : 'flaticon-381-battery-8'},
    {Iconname : 'flaticon-381-battery-9'},
    {Iconname : 'flaticon-381-binoculars'},
    {Iconname : 'flaticon-381-blueprint'},
    {Iconname : 'flaticon-381-bluetooth'},
    {Iconname : 'flaticon-381-bluetooth-1'},
    {Iconname : 'flaticon-381-book'},
    {Iconname : 'flaticon-381-bookmark'},
    {Iconname : 'flaticon-381-bookmark-1'},
    {Iconname : 'flaticon-381-box'},
    {Iconname : 'flaticon-381-box-1'},
    {Iconname : 'flaticon-381-box-2'},
    {Iconname : 'flaticon-381-briefcase'},
    {Iconname : 'flaticon-381-broken-heart'},
    {Iconname : 'flaticon-381-broken-link'},
    {Iconname : 'flaticon-381-calculator'},
    {Iconname : 'flaticon-381-calculator-1'},
    {Iconname : 'flaticon-381-calendar'},
    {Iconname : 'flaticon-381-calendar-1'},
    {Iconname : 'flaticon-381-calendar-2'},
    {Iconname : 'flaticon-381-calendar-3'},
    {Iconname : 'flaticon-381-calendar-4'},
    {Iconname : 'flaticon-381-calendar-5'},
    {Iconname : 'flaticon-381-calendar-6'},
    {Iconname : 'flaticon-381-calendar-7'},
    {Iconname : 'flaticon-381-clock'},
    {Iconname : 'flaticon-381-clock-1'},
    {Iconname : 'flaticon-381-clock-2'},
    {Iconname : 'flaticon-381-close'},
    {Iconname : 'flaticon-381-cloud'},
    {Iconname : 'flaticon-381-cloud-computing'},
    {Iconname : 'flaticon-381-command'},
    {Iconname : 'flaticon-381-compact-disc'},
    {Iconname : 'flaticon-381-compact-disc-1'},
    {Iconname : 'flaticon-381-compact-disc-2'},
    {Iconname : 'flaticon-381-compass'},
    {Iconname : 'flaticon-381-compass-1'},
    {Iconname : 'flaticon-381-compass-2'},
    {Iconname : 'flaticon-381-controls'},
    {Iconname : 'flaticon-381-controls-1'},
    {Iconname : 'flaticon-381-controls-2'},
    {Iconname : 'flaticon-381-controls-3'},
    {Iconname : 'flaticon-381-controls-4'},
    {Iconname : 'flaticon-381-switch-4'},
    {Iconname : 'flaticon-381-controls-5'},
    {Iconname : 'flaticon-381-controls-6'},
    {Iconname : 'flaticon-381-database'},
    {Iconname : 'flaticon-381-database-1'},
    {Iconname : 'flaticon-381-diamond'},
    {Iconname : 'flaticon-381-diploma'},
    {Iconname : 'flaticon-381-dislike'},
    {Iconname : 'flaticon-381-divide'},
    {Iconname : 'flaticon-381-earth-globe'},    
];

const FlaticonIcons = () => {
    const initialState = false;
    const reducer = (state, action) =>{   
        switch (action.type){
            case 'iconModal':
                return { ...state, iconModal: !state.iconModal, content : action.content}            
            default:
                return state
        }	
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <PageTitle activeMenu={"Flaticon Icons"} motherMenu={"Icons"}  />
            <div className="card">
                <div className="card-body svg-area pb-1">
                    <div className="row">
                        {svgBlogData.map((item, ind)=>(
                            <div className="col-xl-2 col-lg-3 col-xxl-2 col-md-4 col-sm-6 col-12 m-b30" key={ind}>
                                <div className="svg-icons-ov style-1" 
                                    onClick={() => dispatch({type:'iconModal', content: item.Iconname })} 
                                >
                                    <div className="svg-icons-prev">
                                        <i className={item.Iconname} />
                                    </div>
                                    <div className="svg-classname">{item.Iconname}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal className="modal fade" show={state.iconModal} onHide={()=>dispatch({type:'iconModal'})} centered>
                    <div className="modal-header">
                        <h5 className="modal-title" id="svg_img_label_Brassieresvg">{state.content}</h5>
                        <button type="button" className="btn-close" onClick={() => dispatch({type:'iconModal'})}></button>
                    </div>
                    <div className="modal-body">
                        <pre>&lt;i className={`"${state.content}"`}/&gt;</pre>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => dispatch({type:'iconModal'})}>Close</button>
                    </div>                    
                </Modal>
            </div>
        </>
    );
};

export default FlaticonIcons;
