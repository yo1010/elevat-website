import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Cards from './Card';
import ModalMail from './Modal';
import ModalPhone from './ModalPhone';
import {Switch, Route} from  'react-router-dom';
import About from './About';

class App extends Component {
  constructor() {
    super(),
    this.state = {
      modalOpenData: false,
      modalOpenPhoneData: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  getModal = (modalOpen) => {
    this.setState(() => {return {modalOpenData:modalOpen}})
  }
  getModalPhone = (modalOpenPhone) => {
    this.setState(() => {return{modalOpenPhoneData:modalOpenPhone}})
  }
  handleClick(e) {
        if (e.target.className === "fas fa-times-circle") {
          this.setState(() => {
            return{
              modalOpenData: false,
              modalOpenPhoneData: false
            }
          })
        }
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
    return (
        <React.Fragment>
          <Navbar modalCallback1={this.getModal} modalCallback2={this.getModalPhone}/>
          <Switch>
            <Route exact path="/">
              <Intro/>
              <Info/>
              <Cards/>
            </Route>
            <Route path="/about" component={About}/>
          </Switch>
          {this.state.modalOpenData === true && 
          <ModalMail />
          }
          {this.state.modalOpenPhoneData === true && 
          <ModalPhone />
          }
        </React.Fragment>
    );
  } 
}


export default App;
