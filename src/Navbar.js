import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../public/img/logo-elevat.png';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false,
            modalOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    passModal = () => {
        let modalOpen = this.state.modalOpen;
        this.props.modalCallback(modalOpen);
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
                    'static-top navbar navbar-expand-sm navbar-dark'}>
                    <div className="navbar-brand ml-2">
                        <img src={logo} alt="logo" className="navbar-brand-img"/>
                    </div>
                    <ul className="navbar-nav align-items-center ml-auto">
                        <li className="text-capitalize nav-item ml-1">
                            <a className="nav-link" href="#"><button className="static">contact us via</button></a></li>
                        <li className="text-capitalize nav-item ml-0">
                            <a className="nav-link" href="#"><button className="button" onClick={()=> this.openModal()}><i className="fas fa-envelope" /></button></a></li>
                        <li className="text-capitalize nav-item ml-1">
                            <a className="nav-link" href="#"><button className="button"><i className="fas fa-phone" /></button></a></li>
                    </ul>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    .button {
        border-radius: 0.5rem;
        background: none;
        border: none;
        text-transform: uppercase;
        color: black;
        font-weight: bold;
        outline: none;
    }
    .button:hover {
        animation: text-jump 0.2s;
        height: 3rem;
        color: var(--mainRed);
        text-shadow: 3px 3px 5px black;
    }
    .static {
        color: var(--mainRed) !important;
        cursor: default;
        border-radius: 0.5rem;
        background: none;
        border: none;
        text-transform: uppercase;
        color: black;
        font-weight: 300 !important;
        outline: none;
    }
    i {
        font-size: 2rem;
    }
    .navbar-brand-img{
        width: 3rem;
        height: 3rem;
    }
    &.static-top{
        background: var(--blueGreen-lessopacity) !important;
        transition: 1s;
    }
    &.fixed-top{
        background: var(--blueGreen-opacity) !important;
        transition: 1s;
    }
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    @media (max-width: 768px) {
        .navbar-nav {
            flex-direction: row !important;
        }
    }
`