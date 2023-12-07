import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { PiCaretLeftThin, PiCaretRightThin  } from "react-icons/pi";
import Slide1 from './Slide1/Slide1';
import Slide2 from './Slide2/Slide2';
import Slide3 from './Slide3/Slide3';
import Slide4 from './Slide4/Slide4';

export default function Banner() {
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      pagination={{dynamicBullets: true}}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{ delay: 8000 }}
      speed={1500} 
    >
      <SwiperSlide>
        <Slide1></Slide1>
      </SwiperSlide>
      <SwiperSlide>
        <Slide2></Slide2>
      </SwiperSlide>
      <SwiperSlide>
        <Slide3></Slide3>
      </SwiperSlide>
      <SwiperSlide>
        <Slide4></Slide4>
      </SwiperSlide>
      <div className="swiper-button-next" style={{ width: '50px'}}>
         <PiCaretRightThin style={{ color: '#fff'}}/>
      </div>
      <div className="swiper-button-prev" style={{ width: '50px'}}>
        <PiCaretLeftThin style={{ color: '#fff'}}/>
      </div>
    </Swiper>
  )
}