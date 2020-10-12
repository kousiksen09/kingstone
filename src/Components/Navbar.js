import React, { Component } from 'react';
import logo from '../assets/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RedoIcon from '@material-ui/icons/Redo';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import ReactTyped from 'react-typed';
import './Style.css';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

class Navbar extends Component {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };
  constructor(props) {
    super(props);
    this.state = {
      roomType: 'None',
    };
  }
  onroom = (event) => {
    this.setState({ roomType: event.target.value });
  };
  render() {
    return (
      <div className='mainhd'>
        <div className='navg'>
          <Grid item sm={12} xs={12}>
            <AppBar
              style={{ backgroundColor: 'transparent' }}
              position='static'
            >
              <Toolbar style={{ backgroundColor: 'transparent' }}>
                <img
                  src={logo}
                  style={{ height: '60px', width: '180px' }}
                  alt='Hotel'
                />
                {/* <Typography className="navtxt" variant="h5">
            King's Palace
          </Typography> */}

                <nav className='nav-item'>
                  <Link
                    variant='button'
                    style={{ color: '#fff', fontWeight: '500', float: 'right' }}
                    href='#room'
                    className='links'
                  >
                    Reservation
                  </Link>
                  <Link
                    variant='button'
                    style={{ color: '#fff', fontWeight: '500', float: 'right' }}
                    href='#about'
                    className='links'
                  >
                    About
                  </Link>
                  <Link
                    variant='button'
                    style={{ color: '#fff', fontWeight: '500', float: 'right' }}
                    href='#contact'
                    className='links'
                  >
                    Contact
                  </Link>
                </nav>
              </Toolbar>
            </AppBar>
          </Grid>
        </div>
        <div className='bgcont'>
          <Typography
            variant='h3'
            className='bgtxt'
            style={{ fontWeight: '600' }}
          >
            Welcome to King's Palace
          </Typography>
          {/* <Typography className="bgtxt" style={{fontSize:"34px", fontWeight:"500"}}>Your Luxury at Bhubaneswar</Typography> */}
          <ReactTyped
            className='bgtxt'
            loop
            typeSpeed={70}
            backSpeed={30}
            shuffle={true}
            showCursor={true}
            fadeOut={true}
            strings={[
              'Your Luxury at Bhubaneswar',
              'A legendary welcome, every time',
              'Popular amoung Couples',
              'Alive with your style of living',
              'An ideal world. If only for a night',
              'Clean Sheets, Hot Water, Stiff Drinks',
              'Come in as Guests. Leave as Family',
              'Emotional luxury',
            ]}
            smartBackspace
            backDelay={1}
            fadeOutDelay={100}
            loopCount={0}
            cursorChar='|'
          />
        </div>

        <div className='booking-area'>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Card variant='contained' style={{ padding: '8px' }}>
                <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                  Check In
                </Typography>
                <form noValidate>
                  <TextField
                    id='datetime-local'
                    type='date'
                    defaultValue='10-07-2020'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </Card>
            </Grid>

            <Grid item xs={6} md={2}>
              <Card variant='contained' style={{ padding: '8px' }}>
                <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                  Check out
                </Typography>
                <form noValidate>
                  <TextField
                    id='datetime-local'
                    type='date'
                    defaultValue='10-07-2020'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </Card>
            </Grid>

            <Grid item xs={6} md={2}>
              <Card variant='conatined' style={{ padding: '7px' }}>
                <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                  Room Type
                </Typography>
                <FormControl>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={this.state.roomType}
                    onChange={this.onroom}
                  >
                    <MenuItem value={10}>Single</MenuItem>
                    <MenuItem value={20}>Double</MenuItem>
                    <MenuItem value={30}>Delux</MenuItem>
                  </Select>
                </FormControl>
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card variant='conatined'>
                <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                  Adult
                </Typography>
                <IndeterminateCheckBoxIcon
                  style={{ color: 'gray', padding: '6px' }}
                  onClick={this.decrement}
                />
                <span
                  style={{
                    fontWeight: 'bold',
                    height: '10px',
                    marginTop: '-20px',
                  }}
                >
                  {this.props.count}
                </span>
                <AddBoxIcon
                  style={{ color: 'gray', padding: '6px' }}
                  onClick={this.increment}
                />
              </Card>
            </Grid>
            <Grid item xs={6} md={2}>
              <Card variant='conatined'>
                <Typography style={{ fontSize: '22px', fontWeight: '500' }}>
                  Children
                </Typography>
                <IndeterminateCheckBoxIcon
                  style={{ color: 'gray', padding: '6px' }}
                  onClick={this.decrement}
                />
                <span
                  style={{
                    fontWeight: 'bold',
                    height: '10px',
                    marginTop: '-20px',
                  }}
                >
                  {this.props.count}
                </span>
                <AddBoxIcon
                  style={{ color: 'gray', padding: '6px' }}
                  onClick={this.increment}
                />
              </Card>
            </Grid>

            <Grid item xs={6} md={2}>
              <Button
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#F2A65A',
                  backgroundImage:
                    'linear-gradient(147deg, #F2A65A 0%, #772F1A 74%)',
                  color: '#fff',
                }}
                variant='contained'
                endIcon={<RedoIcon />}
              >
                CheckOut
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
