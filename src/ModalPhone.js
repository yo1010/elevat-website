import React, { Component } from 'react';
import styled from 'styled-components';

export default class ModalPhone extends Component {
    render() {
            return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 
                            col-lg-4 text-center text-capitalize p-5">
                                <div className="button-container"><button className="my-btn">
                                    <i className="fas fa-times-circle"/></button></div>
                                <div className="info">
                                    <div className="fax">
                                        <span className="partners">Fax:</span> 
                                        <div className="numbers"><a href="tel:+359888324593">
                                            +35988821375</a></div>
                                    </div>
                                    <div className="mobile">
                                        <span className="partners">Mobile:</span>
                                        <div className="numbers">
                                            <a href="tel:+3598883213214">
                                                +35988821375</a></div>
                                    </div>
                                    <div className="landline">
                                        <span className="partners">Landline:</span>
                                        <div className="numbers">
                                            <a href="tel:+3598883213214">
                                                +35988821375</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            )
        }
}


const ModalContainer = styled.div `
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
z-index: 1050;
#modal{
    background: var(--blueGreen-opacity);
    border-radius: 0.2rem;
}
label{
    font-weight: 200;
    text-transform: uppercase;
    color: var(--yellowGreen);
    margin-top: 1rem;
    margin-right: 1rem;
}
input::placeholder{
    color: var(--mainRed);
}
textarea::placeholder{
    color: var(--mainRed);
}
input{
    border-radius: 0.3rem;
    outline:none;
    border: 1px solid;
}
textarea{
    border-radius: 0.2rem;
    outline:none;
    width: 100% !important;
}
.button{
    font-weight: bold;
    margin-top: 0.5rem;
    border: 2px solid var(--blueGreen);
}
.button:hover{
    text-shadow: 3px 3px 3px black;
    color: var(--mainRed);
    background: var(--blueGreen);
}

.my-btn{
    border: none !important;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    background: var(--blueGreen-opacity);
    outline: none;
}
.my-btn:hover{
    text-shadow: 3px 3px 3px black;
    color: var(--mainRed);
}

i {
    font-size: 2rem;
    align-items: center;
    margin-top: 0.2rem;
}

.info > * {
    margin-top: 2rem;
    color: var(--mainRed);
    font-weight: 400;
}

.numbers {
    background: lightgrey;
    border-radius: 2rem;
}

a{
    margin-top: 1px;
    text-decoration: none;
    color: var(--mainRed);
}
@media (min-width: 500px) {
    a:hover{
        font-size: 1.5rem;
    }
}
a:hover{
    color: black;
    transition: 1s;
}
`