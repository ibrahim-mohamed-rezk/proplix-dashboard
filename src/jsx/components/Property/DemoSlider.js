import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, HashNavigation } from 'swiper/modules';

import propert1 from '../../../images/property/1.jpg';
import propert2 from '../../../images/property/2.jpg';
import propert3 from '../../../images/property/3.jpg';

const sliderData = [
    { image:propert2},
    { image:propert3},    
    { image:propert1},
  ];

const DemoSlider = () => {
    return (
        <>
            <div className='dz-media post-swiper'>
                <ul>
                    <li className="badge badge-sm badge-primary light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Paris
                    </li>
                    <li className="rent badge badge-sm badge-primary">For Rent</li>
                </ul>
                <Swiper
                    slidesPerView={1}                    
                    hashNavigation={{
                        watchState: true,
                    }}
                    loop = {true}        
                    speed={2000}
                    navigation = {
                        {
                            prevEl:".btn-prev",
                            nextEl: ".btn-next"
                        }
                    }       
                    modules={[ Navigation, HashNavigation]}
                    className=" swiper"
                >
                   
                    
                    {sliderData.map((item, ind)=>(
                        <SwiperSlide data-hash="slide1" key={ind}>                        
                            <img src={item.image} alt="/" />                    
                        </SwiperSlide>                
                    ))}
                    <div className="menu-button-prev btn-prev">
                        <i className="icon-arrow-left" />
                    </div>
                    <div className="menu-button-next btn-next">
                        <i className="icon-arrow-right" />
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default DemoSlider;