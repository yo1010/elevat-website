import React, { Component } from 'react';
import img from '../public/img/office-work.jpg'
import styled from "styled-components";

export default class Intro extends Component {
    render() {
        return (
            <ImgWrapper className="img-container center">
                <img src={img} alt="legal-office-work" 
                className="img-fluid max-width:100% height:auto"/>
            </ImgWrapper>                
        )
    }
}


const ImgWrapper = styled.div`


`