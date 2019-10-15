import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Card from './Card';
import ModalMail from './Modal';

class App extends Component {
  constructor() {
    super(),
    this.state = {
      modalOpenData: false,
      clickat: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  getModal = (modalOpen) => {
    this.setState(() => {return {modalOpenData:modalOpen}})
  }
  handleClick(e) {
        if (e.target.className === "fas fa-times-circle") {
          this.setState(() => {
            return{
              modalOpenData: false
            }
          })
        }
      console.log(e.target.className)
  }
  componentDidMount() {
    // Listen on click event, call our function.
    window.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
      // Unlisten if the component unmounts.
      window.removeEventListener('click', this.handleClick);
  }
  render() {
    console.log(this.state.modalOpenData)
    return (
        <React.Fragment>
          <Navbar modalCallback={this.getModal} />
          <Intro />
          <Info />
          <Card />
          {this.state.modalOpenData == true && 
          <ModalMail />
          }
        </React.Fragment>
    );
  } 
}


export default App;
