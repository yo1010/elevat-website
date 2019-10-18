import React, { Component } from 'react';
import img from '../public/img/office-work.jpg'
import styled from "styled-components";

export default class Intro extends Component {
    render() {
        return (
            <ImgWrapper className="img-container center">
                <div className="centered"><h1><span className="brand-name">Elevat</span>Legal House</h1></div>
                <div className="under"><button><i className="fas fa-mobile-alt"></i><a href="tel:+359888000000"><span className="phone">+359888000000</span></a></button></div>
                <img src={img} alt="legal-office-work" 
                className="img-fluid max-width:100% height:auto"/>
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`
    position:relative;
    background: rgba(0,0,0,0.9);
    z-index: 1;
    box-shadow: 0px 4px 3px -3px #000000;
    .centered{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        animation: text-move 2s;
        z-index: 2;
        color: var(--mainRed);
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
        width:100%;
        z-index: 2;
    }
    .under > * {
        font-family: 'Abel', sans-serif;
    }
    h1 {
        text-shadow: 1px 1px 3px lightgrey;
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
        font-family: 'Staatliches', sans-serif;
    }
    .brand-name{
        margin-right: 0.3rem;
        text-shadow: 1px 1px 3px lightgrey;
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
    button {
        padding: 0.5rem;
        background: transparent;
        border: none;
        color: var(--blueGreen);
        text-shadow: 2px 2px 2px black;
        outline: none;
    }
    button:hover {
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
        button{
            animation: text-enlarge-sm 2s;
        }
        h1{
            font-size:2rem;
        }
        .brand-name{
            font-size:2rem;
        }
        i{
            font-size:1.5rem;
        }
        span {
            font-size:1.5rem;
        }
    }
    @media (max-width: 500px) {
        h1{
            font-size:1.5rem;
        }
        .brand-name{
            font-size:1.5rem;
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