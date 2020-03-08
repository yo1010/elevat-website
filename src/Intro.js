import React, { Component } from 'react';
import img from '../public/img/office-work.jpg';
import styled from "styled-components";

export default class Intro extends Component {
    render() {
        return (
            <ImgWrapper className="img-container center">
                <div>
                    <img src={img} />
                </div>
                <div className="centered">
                    <div className="titleContainer mx-auto"></div><h5 className="title mx-auto">Elevat <span className="black">Legal House</span></h5>
                    <p className="intro">a professional legal and consulting company with 17 years of
                        practice in the provision of legal counseling and juridical advice</p>
                </div>
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`
    z-index: 1;
    img {
        height: 100vh;
        width: 100%;
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
    .titleContainer {
        position: relative;
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
        text-shadow: 0px 1px 1px black;
        position: relative;
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
    .centered{
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
        width: 60%;
    }
    img{
        filter: grayscale(40%) brightness(70%);
        z-index: 9999;
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
    @media (max-width: 500px) {
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
            font-size:1rem;
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