import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
                <div className="relative">
                    <img src={bannerImg1}/>
                    <div className='absolute  left-0 bottom-0'> 
                        <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <div>
                        <button>Track Your Parcel</button>
                        <h4>Be A Rider</h4>
                    </div>
                    </div>
                    
                </div>
                <div>
                    <img src={bannerImg2} />
                
                </div>
                <div>
                    <img src={bannerImg3} />
                </div>
            </Carousel>

  )
}

export default Banner