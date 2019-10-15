import React, { Component } from 'react';
import styled from 'styled-components';

export default class ModalMail extends Component {
    render() {
            return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 
                            col-lg-4 text-center text-capitalize p-5">
                                <div className="button-container"><button className="my-btn"><i className="fas fa-times-circle"/></button></div>
                                <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" 
                                action="https://formspree.io/ydimitrov95@gmail.com" method="post"
                                >
                                    <fieldset id="fs-frm-inputs">
                                        <div className="fullname">
                                            <label htmlFor="full-name">Full Name</label>
                                        </div>
                                        <input  type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                                        <div className="emailadress">
                                            <label  htmlFor="email-address">Email Address</label>
                                            <input  type="email" name="_replyto" id="email-address" placeholder="Email" required="" />
                                        </div>
                                        <div className="message">
                                            <label  htmlFor="message">Message</label>
                                            <textarea  rows="5" name="message" id="message" placeholder="Write text here" required=""></textarea>
                                        </div>
                                        <input  type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                                    </fieldset>
                                    <input className="button" type="submit" value="Submit" />
                                </form>
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
`