import React, { Component } from 'react';
import img from '../public/img/office-work.jpg';
import img1 from '../public/img/document.jpg';
import img2 from '../public/img/signature.jpg';
import img3 from '../public/img/desk-work.jpg';
import styled from "styled-components";

export default class Intro extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 0
        };
        this.plusSlides=this.plusSlides.bind(this);
        this.minusSlides=this.minusSlides.bind(this);
        this.currentSlide=this.currentSlide.bind(this);
    }
    plusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex > 2) {
            this.setState(() => {
                return {slideIndex: 0}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex + n}
            })
        }
        console.log(slideIndex)
    }
    minusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex < 1) {
            this.setState(() => {
                return {slideIndex: 3}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex - n}
            })
        }
        console.log(slideIndex)
    }
    currentSlide(n) {
        this.setState(() => {
            return {slideIndex: n}
        })
    }
    render() {
        return (
            <ImgWrapper className="img-container center">
                <div className="centered"><h1><span className="brand-name">Elevat</span>Legal House</h1></div>
                <div className="under"><button className="btn-phone"><i className="fas fa-mobile-alt"></i>
                <a href="tel:+359888000000"><span className="phone">+359888000000</span></a></button></div>
                <div className={this.state.slideIndex === 0 ? "fade" : "d-none fade"}>
                    <div className="numbertext"></div>
                    <img src={img} alt="legal-office-work" 
                    className="img-fluid max-width:100% height:auto"/>
                </div>
                <div className={this.state.slideIndex === 1 ? "fade" : "d-none fade"}>
                    <div className="numbertext"></div>
                    <img src={img1} alt="document-sign" 
                    className="img-fluid max-width:100% height:auto"/>
                </div>
                <div className={this.state.slideIndex === 2 ? "fade" : "d-none fade"}>
                    <div className="numbertext"></div>
                    <img src={img2} alt="desk-work" 
                    className="img-fluid max-width:100% height:auto"/>
                </div>
                <div className={this.state.slideIndex === 3 ? "fade" : "d-none fade"}>
                    <div className="numbertext"></div>
                    <img src={img3} alt="desk-work" 
                    className="img-fluid max-width:100% height:auto"/>
                </div>
                <button className="prev btn-slide" onClick={()=>this.minusSlides(1)}>
                    <i className="fas fa-chevron-left arrow"></i></button>
                <button className="next btn-slide" onClick={()=>this.plusSlides(1)}>
                    <i className="fas fa-chevron-right arrow"></i></button>
                <div className="dots">
                    <span className={this.state.slideIndex === 0 ? "active dot" : "dot"} 
                    onClick={()=>this.currentSlide(0)}></span>
                    <span className={this.state.slideIndex === 1 ? "active dot" : "dot"} 
                    onClick={()=>this.currentSlide(1)}></span>
                    <span className={this.state.slideIndex === 2 ? "active dot" : "dot"} 
                    onClick={()=>this.currentSlide(2)}></span>
                    <span className={this.state.slideIndex === 3 ? "active dot" : "dot"} 
                    onClick={()=>this.currentSlide(3)}></span>
                </div>
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`
    position:relative;
    z-index: 1;
    margin-top: 4rem;
    .btn-slide {
        cursor: pointer;
        position: absolute;
        top:35%;
        color: black;
        font-weight: bold;
        transition: 0.6s ease;
        border: none;
        user-select: none;
        z-index: 3;
        background: none;
        outline: none;
    }
    .dots{
        position: absolute;
        top: 90%;
        width:100%;
        text-align: center;
        background: none;
    }
    .arrow {
        font-size: 3rem;
    }
    .prev {
        left: 0;
        padding-left: 0;
    }
    .next {
        right: 0;
        padding-right: 0;
    }
    .btn-slide:hover {
        color: var(--mainRed);
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
    }
    .numbertext {
        color: var(--mainRed);
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: lightgrey;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        margin-top: 0.4rem;
    }
    .active, .dot: hover {
        background-color: var(--mainRed)
    }
    .fade {
        opacity: 1;
        animation-name: fade;
        animation-duration: 1.5s;
    }
    @keyframes fade {
        from {opacity: 0.4} to {opacity: 1}
    }
    .centered{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        animation: text-move 2s;
        z-index: 2;
        color: var(--mainRed);
        width: 60%;
    }
    img{
        filter: grayscale(40%) brightness(70%);
        z-index: 0;
    }
    .under{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        animation: text-move1 2s ease-in 2s;
        animation: fade-in 2s ease-in 1s;
        opacity: 0;
        animation-fill-mode: forwards;
        width:60%;
        z-index: 2;
    }
    .under > * {
        font-family: 'Abel', sans-serif;
    }
    h1 {
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
        font-family: 'Staatliches', sans-serif;
        text-shadow: 2px 2px 2px white;
    }
    }
    .brand-name{
        margin-right: 0.3rem;
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
        font-family: 'Staatliches', sans-serif;
        text-shadow: 2px 2px 2px white;
    }
    .phone {
        margin-left: 0.3rem;
        color: var(--blueGreen);
        text-shadow: 2px 2px 2px black;
    }
    .btn-phone {
        padding: 0.5rem;
        background: transparent;
        border: none;
        color: var(--blueGreen);
        text-shadow: 2px 2px 2px black;
        outline: none;
    }
    .btn-phone:hover {
        color: var(--mainRed);
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
        span {
            color: var(--mainRed);
        }
    }
    @media (min-width: 1024px) {
        h1{
            font-size:4rem;
            animation: text-enlarge-lg 2s;
        }
        .brand-name{
            font-size:4rem;
            animation: text-enlarge-lg 2s;
        }
        i{
            font-size:3rem;
        }
        span {
            font-size:3rem;
        }
    }
    @media (max-width: 1024px) {
        h1{
            font-size:2rem;
            animation: text-enlarge-sm 2s;
        }
        .brand-name{
            font-size:2rem;
            animation: text-enlarge-sm 2s;
        }
        i{
            font-size:1.5rem;
        }
        span {
            font-size:1.5rem;
        }
    }
    @media (max-width: 500px) {
        .dots {
            display: none;
        }
        h1{
            font-size:1.5rem;
        }
        .brand-name{
            font-size:1.5rem;
        }
        span {
            font-size:1rem;
        }
        i{
            font-size:1rem;
        }
    }
    @keyframes fade-in { from { opacity:0; } to { opacity:1; } }
    @keyframes text-enlarge-lg {from {font-size: 1rem;} to {font-size: 4rem;}}
    @keyframes text-enlarge-sm {from {font-size: 0.5rem;} to {font-size: 2rem;}}
    @keyframes text-move {from {top: 70%;} to {top:40%;}}
    @keyframes text-move1 {from {top: 70%;} to {top:55%;}}
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    a {
        text-decoration: none;
    }
`