import React, { Component } from 'react';
import{Grid, Typography} from '@material-ui/core';
import logo from '../assets/logo.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area" id= "contact">
                <div className="footer-content">
                    <Grid container spacing={10}>
                        <Grid md={4}>
                        <img src={logo} className="fimg" alt="Hotel"/>
                        <Typography className="copyright">
                             Copyright © 2020 by Highradius Autonomus Team
                        </Typography>
                        </Grid>

                        <Grid md={4}>
                        <Typography variant="h5" className="fhdr">
                            Address
                        </Typography>
                        <div className="contact">
                           <LocationOnIcon className="iconsf" />
                        <Typography className="fct">
                            KIIT Road, Patia, Bhubaneswar, Odisha 
                        </Typography>
                        <br/>
                        <CallIcon className="iconsf" />
                        <Typography className="fct">
                            9382117960
                        </Typography>
                        <br/>
                        <EmailIcon className="iconsf" />
                        <Typography className="fct">
                            kousik.sen@highradius.com
                        </Typography>

                        </div>
                        </Grid>

                        <Grid md={4}>
                        <Typography variant="h5" className="fhdr">
                            Our Partner
                        </Typography>
                        <div className="partner">
                            <img  src="https://toppng.com/uploads/preview/icici-bank-logo-vector-free-11574201415tjm5c6ttti.png" alt="ICICI"/>
                            <img  src="https://media-exp1.licdn.com/dms/image/C510BAQEOYQ7WtCHSIw/company-logo_200_200/0?e=2159024400&v=beta&t=IE5D7TPYzjq5vWNdN_YoGK_J8Dl5mPqAxkuYES_Dj4c" alt="Highradius"/>
                            <img  src="https://images.shiksha.com/mediadata/images/1572328331phpf7HGDW.png" alt="KIIT"/>
                            <img src="https://www.designbust.com/download/553/png/coca_cola_logo_icon256.png" alt="cocacola"/>
                        </div>
                        </Grid>
                    </Grid>
                </div>

                
            </div>
        );
    }
}

export default Footer;