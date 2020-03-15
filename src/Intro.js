import React, { Component } from 'react';
import img from './office-work.jpg';
import styled from "styled-components";

export default class Intro extends Component {
    scrollDown = () => {
        window.scrollTo(0, 625)
    }
    render() {
        return (
            <ImgWrapper className="center">
                <div className="imgContainer">
                </div>
                <div className="centered">
                    <div className="titleContainer mx-auto">
                    </div>
                    <h5 className="title mx-auto">Elevat <span className="black">Legal House</span></h5>
                    <p className="intro mx-auto">a professional legal and consulting company with 17 years of
                        practice</p> 
                    <p className="intro mx-auto">in the provision of legal counseling and juridical advice</p>
                </div>
                <button className="scrollButton" onClick={this.scrollDown}>
                    <i className="fas fa-chevron-down"></i>
                </button> 
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`
    z-index: 1;
    width: 100%;
    .imgContainer {
        width: 100%;
        height: 100vh;
        background-image: url(${img});
        background-position: center;
        filter: grayscale(40%) brightness(70%);
    }
    .black {
        color: white;
        border: none;
        font-family: font-family: 'Staatliches', sans-serif;
        text-shadow: 0px 1px 1px black;
    }
    .intro {
        transform: translateY(30rem);
        color: white;
        animation: text-move 1.5s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
    }
    .scrollButton {
        position: absolute;
        top: 80%;
        left: 47%;
        background: none;
        border: none;
        outline: none;
        color: var(--blueGreen);
        z-index: 20;
        font-size: 2rem;
        animation: text-jump 0.5s infinite forwards;
    }
    .titleContainer {
        margin-top: 7rem;
        z-index: 0;
        width: 50%;
        height: 6rem;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 5px;
        box-shadow: 0 0 4px 3px rgba(255, 255, 255, 0.1);
        filter: blur(12px);
        transform: scale(2) translateY(50px);
    }
    .title {
        width: 50%;
        text-shadow: 0px 1px 1px black;
        z-index: 3;
        color: var(--darkRed);
        font-size: 3rem;
        font-family: font-family: 'Staatliches', sans-serif;
        font-weight: bold;
        animation: text-move 1.5s;
    }
    .paragraph {
        color: white; 
        font-size: 1.5rem;
    }
    .centered{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0%;
        left: 0%;
        text-align: center;
        z-index: 2;
    }
    img{
        filter: grayscale(40%) brightness(70%);
        z-index: 9999;
    }
    h1 {
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
        font-family: 'Staatliches', sans-serif;
    }
    }
    .brand-name{
        margin-right: 0.3rem;
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
        font-family: 'Staatliches', sans-serif;
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
            text-shadow: 2px 2px 2px white;
        }
        .brand-name{
            font-size:4rem;
            animation: text-enlarge-lg 2s;
            text-shadow: 2px 2px 2px white;
        }
        i{
            font-size:3rem;
        }
        .title {
            font-size:3rem;
        }
    }
    @media (max-width: 1024px) {
        h1{
            font-size:2rem;
            animation: text-enlarge-sm 2s;
            text-shadow: 1px 1px 1px white;
        }
        .brand-name{
            font-size:2rem;
            animation: text-enlarge-sm 2s;
            text-shadow: 1px 1px 1px white;
        }
        i{
            font-size:1.5rem;
        }
        .title {
            font-size:1.5rem;
        }
    }
    @media (max-width: 499px) {
        .dots {
            display: none;
        }
        h1{
            font-size:1.5rem;
            text-shadow: 1px 1px 0.5px white;
        }
        .brand-name{
            font-size:1.5rem;
            text-shadow: 1px 1px 0.5px white;
        }
        .title {
            font-size:1rem;
        }
        i{
            font-size:2rem;
        }
        img {
            width: auto;
        }
        .scrollButton {
            left: 38%;
        }
        p{
            width: 70%;
        }
    }
    @keyframes fade-in { from { opacity:0; } to { opacity:1; } }
    @keyframes text-enlarge-lg {from {font-size: 1rem;} to {font-size: 4rem;}}
    @keyframes text-enlarge-sm {from {font-size: 0.5rem;} to {font-size: 2rem;}}
    @keyframes text-move {from {
        transform: translateY(30rem);
    } to {
        transform: translateY(0);
    }}
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
    a {
        text-decoration: none;
    }
`