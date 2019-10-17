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
            modalOpenPhone: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.openModal = this.openModal.bind(this);
        this.openModalPhone = this.openModalPhone.bind(this);
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
        if (topOfPage === 0) {
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
                    <ul className="navbar-nav align-items-center ml-auto">
                        <li className="text-capitalize nav-item ml-1">
                            <button className="button" onClick={()=> this.openModal()}>
                                <i className="fas fa-edit" /></button></li>
                        <li className="text-capitalize nav-item ml-1">
                            <button className="button" onClick={()=>this.openModalPhone()}>
                                <i className="fas fa-phone" /></button></li>
                        <li className="text-capitalize nav-item ml-1">
                            <a className="nav-link" href="mailto:ydimitrov95@gmail.com?subject=Enquiry&body=Your message">
                                <button className="button"  id="btnOutlook">
                                <i className="fas fa-envelope" /></button></a></li>
                    </ul>
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
        color: black;
        font-weight: bold;
        outline: none;
    }
    .btn-about{
        text-transfom: lowercase !important;
    }
    .button:hover {
        animation: text-jump 0.2s;
        height: 3rem;
        color: var(--mainRed);
        text-shadow: 3px 3px 5px black;
    }
    i {
        font-size: 2rem;
        animation: i-big 3s;
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
    &.fixed-top{
        background: var(--blueGreen-opacity);
        transition: 1s !important;
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @media (max-width: 768px) {
        .navbar-nav {
            flex-direction: row !important;
        }
        & > * {
            display:inline-flex;
            flex-direction: row;
        }
        li {
            margin-left: 0;
        }
    }
    @keyframes btn-show {
        from {opacity: 0;} to {opacity: 1;}
    }
    @keyframes img-big {
        from {width:5rem; height:5rem;} to {width:3rem; height:3rem;}
    }
`