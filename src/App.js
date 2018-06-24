import React, { Component, StyleSheet } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <BasicButton s={default1}/>
        <YoutubePlayer/>
        <Welcome/>
        <Questions/>
        <Reviews/>
        <Footer/>
      </div>
    );
  }
}

export default App;

const Header = () => { return <div style={default1}>Header<Logo/><Noti/><Noti/></div>}
  const Logo = () => { return <span style={default2}>Logo</span>}
  const Noti = () => { return <span style={default2}>Noti</span>}
const Banner = () => { return <div style={default1}>Lolling Banner</div>}
const BasicButton = (props) => { return <div style={props.s}>BasicButton</div>}
const YoutubePlayer = () => { return <div style={default1}>YoutubePlayer</div>}
const Welcome = () => { return <div style={default1}>Welcome<BasicButton s={default2}/><BasicButton s={default2}/><UseProgress/></div>}
const UseProgress = () => { return <div style={default2}>UseProgress</div>}
const Questions = () => { return <div style={default1}>Questions<Question/><Question/><Question/></div> }
  const Question = () => { return <div style={default2}>Question</div>}
const Reviews = () => { return <div style={default1}>Reviews<Review/><Review/><Review/></div> }
  const Review = () => { return <div style={default2}>Review</div>}  
const Footer = () => { return <div style={default1}>Footer</div>}


const default1 = {
  border: 'solid'
}
const default2 = {
  border: 'solid',
  borderColor: 'blue'
}