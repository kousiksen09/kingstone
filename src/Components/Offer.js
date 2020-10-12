import React, { Component } from 'react';
import { Typography, Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import lare from '../assets/lare.jpg';
import roof from '../assets/roof.jpg';
import premium from '../assets/premium.jpg';
import './Style.css';
class Offer extends Component {
  render() {
    return (
      <div>
        <Typography variant='h4' className='navtxt'>
          What We offer
        </Typography>
        <div className='line'></div>
        <br />
        <Grid container spacing={8}>
          <Grid item xs={12} md={4} sm={4}>
            <Card>
              <CardActionArea>
                <img src={lare} className='media' alt='large' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    LARGE CAFE
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Point of using that has more less normal distribution is
                    among
                  </Typography>
                  <br></br>
                  <Typography variant='body2'>
                    <b style={{ color: 'coral' }}> $120</b> /Night
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={4}>
            <Card>
              <CardActionArea>
                <img src={roof} className='media' alt='large' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    ROOFTOP CUSINE
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Point of using that has more less normal distribution is
                    among
                  </Typography>
                  <br></br>
                  <Typography variant='body2'>
                    <b style={{ color: 'coral' }}> $150</b> /Night
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={4}>
            <Card>
              <CardActionArea>
                <img src={premium} className='media' alt='large' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    PREMIUM LIVING
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Point of using that has more less normal distribution is
                    among
                  </Typography>
                  <br></br>
                  <Typography variant='body2'>
                    <b style={{ color: 'coral' }}> $180</b> /Night
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Offer;
