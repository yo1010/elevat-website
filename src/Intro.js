import React, { Component } from 'react';
import img from '../public/img/office-work.jpg'
import styled from "styled-components";

export default class Intro extends Component {
    render() {
        return (
            <ImgWrapper className="img-container center">
                <div className="centered"><h1>Elevat Legal House</h1></div>
                <div className="under"><button><i className="fas fa-phone-alt"></i><span>+3598880000000</span></button></div>
                <img src={img} alt="legal-office-work" 
                className="img-fluid max-width:100% height:auto"/>
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`
    position:relative;
    .centered{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        animation: text-move 2s;
    }
    .under{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        animation: text-move1 2s ease-in 2s;
        animation: fade-in 2s ease-in 1s;
        opacity: 0;
        animation-fill-mode: forwards;
    }
    h1 {
        color: var(--greenBlue);
        text-shadow: 2px 2px 2px black;
        text-transform: uppercase;
        font-weight: 400;
        animation: fade-in;
        animation-duration: 2s;
    }
    span {
        margin-left: 1rem;
        color: var(--mainRed);
        text-shadow: 2px 2px 2px black;
    }
    button {
        padding: 0.5rem;
        background: transparent;
        border: none;
        color: var(--mainRed);
        text-shadow: 2px 2px 2px black;
    }
    button:hover {
        color: var(--blueGreen);
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
        span {
            color: var(--blueGreen);
        }
    }
    @media (min-width: 768px) {
        h1{
            font-size:3rem;
            animation: text-enlarge-lg 2s;
        }
        i{
            font-size:3rem;
        }
        span {
            font-size:3rem;
        }
    }
    @media (max-width: 768px) {
        h1{
            font-size:1rem;
            animation: text-enlarge-sm 2s;
            font-size:1rem;
        }
        span {
            font-size:1rem;
        }
    }
    @keyframes fade-in { from { opacity:0; } to { opacity:1; } }
    @keyframes text-enlarge-lg {from {font-size: 1rem;} to {font-size: 3rem;}}
    @keyframes text-enlarge-sm {from {font-size: 0.5rem;} to {font-size: 1rem;}}
    @keyframes text-move {from {top: 70%;} to {top:40%;}}
    @keyframes text-move1 {from {top: 70%;} to {top:50%;}}
    @keyframes text-jump {
        from { transform: translate(0px, 0px); }
        to { transform: translate(0px, -3px); }
    }
`