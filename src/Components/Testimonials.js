import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import p1 from '../assets/p1.png';
import atanu from '../assets/atanu.jpg'
import virat from '../assets/virat.webp'
const options = {
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    autoplay: true
  };
class Testimonials extends Component {
    render() {
        return (
            <div className="testimonials">
                <div className="testimonials-h ">

                 <OwlCarousel className="owl-theme" {...options}>
                 <div className="item">
                            <div className="img-testimonials"><img src={atanu} alt="#"/></div>
                            <br/>
                            <p className="testimonials-p"><span>“</span>​‌ This is the only place to stay in KING'S PALACE! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your <span>​‌​‌”</span> ocean view window and then to top it all off...</p>
                            <h5 className="sky-h5">ATANU SAHA</h5>
                            <p className="testimonials-p1">From DURGAPUR, WEST BENGAL</p>
                        </div>
                        <div className="item">
                            <div className="img-testimonials"><img style={{height:"125px", width:"125px"}} src={virat} alt="#"/></div>
                            <br/>
                            <p className="testimonials-p"><span>“</span>​‌ This is the only place to stay in KING'S PALACE! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your <span>​‌​‌”</span> ocean view window and then to top it all off...</p>
                            <h5 className="sky-h5">VIRAT KOHOLI</h5>
                            <p className="testimonials-p1">From  Uttam Nagar , New Delhi</p>
                        </div>
                        <div className="item">
                            <div className="img-testimonials"><img src={p1} alt="#"/></div>
                            <br/>
                            <p className="testimonials-p"><span>“</span>​‌ This is the only place to stay in KING'S PALACE! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your <span>​‌​‌”</span> ocean view window and then to top it all off...</p>
                            <h5 className="sky-h5">JULIA ROSE</h5>
                            <p className="testimonials-p1">From Los Angeles, California</p>
                        </div>
                      
                 </OwlCarousel>
                 </div>
                 </div>
        );
    }
}

export default Testimonials;