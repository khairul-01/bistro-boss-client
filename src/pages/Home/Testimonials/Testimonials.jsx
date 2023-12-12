import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch('reviews.json')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])
   return (
      <section className="my-20">
         <SectionTitle
            subHeading='What Our Client Say'
            heading='testimonials'
         ></SectionTitle>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            
            {
               reviews.map(review =><SwiperSlide
               key={review._id}
               >
                  <div>
                     <p>{review.details}</p>
                     <h3 className="text-3xl text-orange-400"> {review.name} </h3>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </section>
   );
};

export default Testimonials;