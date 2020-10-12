import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
import About from './Components/About';
import Room from './Components/Room';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const initialState = {
  count: 0
}
function reducer(state = initialState, action) {
  // console.log(action)

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer)

function App() {
  return (
    <div>
       <Provider store={store}>
   <Navbar/>
   </Provider>
   <div className="maincont">
   <Offer/>
<br/>
   <About/>
   <Room/>
   <br/>
   <Testimonials/>
   <hr/>
   <Footer/>
   </div>
   </div>
  );
}

export default App;
