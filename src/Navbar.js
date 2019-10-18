import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../public/img/logo-elevat.png';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false,
            modalOpen: false,
            modalOpenPhone: false,
            toggle: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.openModal = this.openModal.bind(this);
        this.openModalPhone = this.openModalPhone.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    passModal = () => {
        let modalOpen = this.state.modalOpen;
        this.props.modalCallback1(modalOpen);
    }

    passModalPhone = () => {
        let modalOpenPhone = this.state.modalOpenPhone;
        this.props.modalCallback2(modalOpenPhone);
    }
    
    handleScroll() {
        let topOfPage = window.pageYOffset;
        // Check if it was scrolled back to the top.
        if (topOfPage <= 20) {
            this.setState(() => {
                return {hasScrolled: false}
            })
        } else {
            this.setState(() => {
                return {hasScrolled: true}
            })
        }
    }
    openModal() {
        this.setState(() => {
            return {modalOpen: true}
        },
        () => {
            console.log(this.state.modalOpen)
            this.passModal()
        })
    }
    openModalPhone() {
        this.setState(() => {
            return {modalOpenPhone: true}
        },
        () => {
            console.log(this.state.modalOpenPhone)
            this.passModalPhone()
        })
    }
    handleToggle() {
        if (this.state.toggle === false) {
            this.setState(() => {
                return {toggle: true}
            })
        } else {
            this.setState(() => {
                return {toggle: false}
            })
        }
    }
    
    componentDidMount() {
        // Listen on scrolling event, call our function.
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        // Unlisten if the component unmounts.
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <div id="container">
                <NavWrapper className={this.state.hasScrolled ? 
                    'fixed-top navbar navbar-expand-sm navbar-dark' : 
                    'static-top no-op navbar navbar-expand-sm navbar-dark'}>
                    <div className="navbar-brand ml-2">
                        <Link to="/">
                            <img src={logo} alt="logo" className="navbar-brand-img"/>
                        </Link>
                    </div>
                    <div className="about">
                        <Link to="/about">
                            <button className="button btn-about">
                                About us</button></Link>
                    </div>
                    <button class="navbar-toggler" type="button" onClick={() => this.handleToggle()} data-target="#navbarSupportedContent" 
                    aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button> 
                    <div className={this.state.toggle ? "navbar-collapse" :
                        "navbar-collapse collapse ml-auto"}  id="navbarSupportedContent">
                        <ul className="navbar-nav align-items-center ml-auto">
                            <li className="text-capitalize nav-item ml-1">
                                <button className="button" onClick={()=> this.openModal()}>
                                    <i className="fas fa-edit" /></button></li>
                            <li className="text-capitalize nav-item ml-1">
                                <button className="button" onClick={()=>this.openModalPhone()}>
                                    <i className="fas fa-phone" /></button></li>
                            <li className="text-capitalize nav-item ml-1">
                                <button className="button"  id="btn-mail">
                                    <a className="nav-link" 
                                    href="mailto:ydimitrov95@gmail.com?subject=Enquiry&body=Your message">
                                    <i className="fas fa-envelope" /></a>
                                </button></li>
                        </ul>
                    </div> 
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    display:flex;
    flex-direction: row !important;
    .button {
        border-radius: 0.5rem;
        background: none;
        border: none;
        font-weight: bold;
        outline: none;
    }
    .btn-about{
        text-transfom: lowercase !important;
        font-family: 'Staatliches', sans-serif;
        font-size: 1.2rem;
    }
    i {
        font-size: 2rem;
        color: black;
    }
    .button:hover {
        animation: text-jump 0.2s;
        height: 3rem;
        text-shadow: 3px 3px 5px black;
        color: var(--mainRed);
        i {
            color: var(--mainRed);
        }
    }
    .navbar-brand-img{
        width: 3rem;
        height: 3rem;
        animation: img-big 3s;
    }
    &.no-op{
        background: var(--blueGreen-lessopacity) !important;
        transition: 1s !important;
    }
    .navbar-collapse{
        margin-left: auto !important;
    }
    &.fixed-top{
        background: var(--blueGreen-opacity);
        transition: 1s !important;
    }
    .navbar-toggler{
        outline: none;
        border: none;
        margin-right: 4px;
    }
    .navbar-toggler:hover{
        .fa-bars{
            color: var(--mainRed);
            text-shadow: 2px 2px 1px black;
        }
    }
    .fa-bars{
        color: black;
        padding-left: 2px;
    }
    @media (min-width: 768px) {
        navbar-toggler {
            display: none !important;
        }
    }
    @media (max-width: 768px) {
        li {
            margin-left: 0;
        }
        .navbar-toggler{
            margin-left: auto;
        }
    }
    @media (max-width: 500px) {
        .navbar-nav {
            float: right !important;
            margin-top: 0.5rem;
        }
        .navbar-nav > * {
            margin-top: 0.5rem;
        }
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @keyframes btn-show {
        from {opacity: 0;} to {opacity: 1;}
    }
    @keyframes img-big {
        from {width:5rem; height:5rem;} to {width:3rem; height:3rem;}
    }
`