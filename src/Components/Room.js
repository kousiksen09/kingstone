import React, { Component } from 'react';
import './Style.css';
import {Typography, Grid, Card} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classic from '../assets/classic.jpg';
import budget from '../assets/budget.jpg';
import prems from '../assets/prems.jpg';
import Button from '@material-ui/core/Button';


class Room extends Component {
    render() {
        return (
         
            <div id="room">
                 <Typography variant="h4" className="navtxt">
                    Our Rooms
                </Typography>
                <div className="line"></div>
                <br/>
            
                <Grid container spacing={8}>
                    <Grid item xs={12} md={4} sm={4}>
                    <Card>
      <CardActionArea>
        <img src={classic} className="mediato" alt="large"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        CLASSIC ROOM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          18 m2 <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Balcony <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Lake view
          </Typography>
          <br></br>
          <Typography variant="body2">
             <b style={{color:"coral"}}> $180</b> /Night
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" style={{position:"relative", float:"right", alignSelf:"flex-end", backgroundColor:"#08e1ae",
backgroundImage: "linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)",color:"#fff",  padding:"12px"}}>
          BOOK NOW
        </Button>
     
      </CardActions>
    </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                    <Card>
      <CardActionArea>
        <img src={budget} className="mediato" alt="large"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          BUDGET ROOM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          20 m2 <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Balcony <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Lake view
          </Typography>
          <br></br>
          <Typography variant="body2">
             <b style={{color:"coral"}}> $200</b> /Night
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" style={{position:"relative", float:"right",backgroundColor:"#08e1ae",
backgroundImage: "linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)",color:"#fff",  padding:"12px"}}>
          BOOK NOW
        </Button>
     
      </CardActions>
    </Card>
                    </Grid>


                    <Grid item xs={12} md={4} sm={4}>
                    <Card>
      <CardActionArea>
        <img src={prems} className="mediato" alt="large"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          PREMIUM ROOM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          22 m2 <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Balcony <b style={{fontWeight:"800", fontSize:"32px", color:"#C71585"}}>.</b> Lake view
          </Typography>
          <br></br>
          <Typography variant="body2">
             <b style={{color:"coral"}}> $250</b> /Night
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" variant="contained" style={{position:"relative", float:"right",backgroundColor:"#08e1ae",
backgroundImage: "linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)",color:"#fff",  padding:"12px"}}>
          BOOK NOW
        </Button>
      
      </CardActions>
    </Card>
                    </Grid>
                </Grid>
                {/* <Route exact path="/" component={Room} />
                <Route path="/booking" component={Reservation}/>
                </Router> */}
            </div>
        );
    }
}

export default Room;