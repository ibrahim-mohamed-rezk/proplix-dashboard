import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, HashNavigation } from 'swiper/modules';

//Images
import gallery1 from "../../../../images/gallery/1.png";
import gallery2 from "../../../../images/gallery/2.png";
import gallery3 from "../../../../images/gallery/3.png";



const sliderData = [
  { image:gallery1},
  { image:gallery2},
  { image:gallery3},
  { image:gallery2},
  { image:gallery1},
];

const ImageGallery = () => {    
  return (
    <div className="image-gallery-container">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
        // loop = {true}        
        speed={2000}
        navigation = {
          {
            prevEl:".left-arrow",
            nextEl: ".right-arrow"
          }
        }
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          591: {
            slidesPerView: 2,
          },
          1750: {
            slidesPerView: 3,
          },
        }}
        modules={[ Navigation, HashNavigation]}
        className="mySwiper"
      >
        {sliderData.map((item, ind)=>(
            <SwiperSlide data-hash="slide1" key={ind}>
                <div className="items">
                  <img src={item.image} alt="" className="d-block w-100"/>
              </div>
            </SwiperSlide>                
          ))}
      </Swiper>   
        <div className="owl-nav detail-nav">
          <div className="owl-prev left-arrow">
            <i className="fas fa-caret-left" />
          </div>
          <div className="owl-next right-arrow">
            <i className="fas fa-caret-right" />
          </div>
        </div>   
    </div>
  );
};

export default ImageGallery;
