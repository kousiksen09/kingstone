import React, { Component } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Typography, Grid} from '@material-ui/core';
import './Style.css';
const options = {
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    autoplay: true
  };

class About extends Component {
    render() {
        return (
            <div id="about">
                <Typography variant="h4" className="navtxt">
                    About Us
                </Typography>
                <div className="line"></div>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography className="abouttxt" style={{fontSize:"20px"}}>
                        Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive

Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="slider">
                    <OwlCarousel className="owl-theme" {...options}>
      <div className="itemr">
      <img src={img1} alt="img1"/>
      </div>
      <div className="itemr">
      <img src={img2} alt="img2"/>
      </div>
      <div className="itemr">
      <img src={img3} alt="img1"/>
      </div>
    </OwlCarousel>
    </div>
                    </Grid>
                
           
    

                    </Grid>

 
            </div>
            
        );
    }
}

export default About;