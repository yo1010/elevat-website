import React from 'react'
import styled from 'styled-components'

export default function CardItem(props) {
    return (
        <ProductWrapper>
            <div className="row">
                    {props.content}
            </div>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    img {
        position: relative;
        overflow: hidden;
        height: 20rem;
        box-shadow: inset 0 0 0 1000px rgba(194, 8, 5, 0.2);
        z-index: -2;
    }
    .imgContainer {
        position: relative;
        height: 20rem;
        width: 30.7rem;
        background: none;
        box-shadow: inset 0 0 0 1000px rgba(194, 8, 5, 0.5);
        box-sizing: border-box;
    }
    .card-header {
        background: var(--blueGreen);
        border: solid 0.2rem var(--blueGreen);
        border-radius: 0.2rem;
        padding-bottom: 4rem;
        width: auto;
    }
    .card {
        z-index: 1;
    }
    .rightImgContainer {
        left: -50%;
    }
    .leftCard {
        clip-path: polygon(100% 0%, 0% 0%, 100% 100%);
        h4 {
            text-align: right;
        }
    }
    .rightCard {
        clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
        h4 {
            text-align: left;
        }
    }
    .card{
        width: 40rem;
        border: none;
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    i {
        font-size: 2rem;
        align-self: center;
    }
    .green {
        color: var(--yellowGreen)
    }
    .paragraph2 {
        font-size: 1.5rem;
    }
    @media (max-width: 1207px) {
        .colContainer {
            display: none;
        }
    }
    @keyframes slide-left {
        from { transform: translateX(-50rem); }
        to { transform: translateX(0rem); }
    }
    @keyframes slide-right {
        from { transform: translateX(50rem); }
        to { transform: translateX(0rem); }
    }
`