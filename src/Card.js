import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
    render() {
        return (
            <div className="row">
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <h4>Corporate Law:</h4>
                        <div className="info">
                            <p>- Registration of companies and associations 
                                and all further changes, related to their legal
                                status</p>
                            <p>- Acquisition, merger and separation of companies</p>
                            <p>- Increase and decrease of company capital</p>
                            <p>- Preparation of the corresponding books of the companies</p>
                            <p>- Transfer of stakes, stocks, temporary certificates</p>
                            <p>- Transfer of companies</p>
                            <p>- Mixed associations</p>
                            <p>- Commercial contracts and deals</p>
                        </div>
                    </div>
                </ProductWrapper>
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <h4>Contract & Labour law:</h4>
                        <div className="info">
                            <p>- Preparation of all kinds of named and unnamed agreements, responding to the interests and
                            purposes of the parties</p>
                            <p>- Representation in negotiations and meetings, Legal statements and Consultings</p>
                            <p>- Labour and Employment Contracts</p>
                            <p>- Legal defense of the interests of the Empoyer/Empoyee in Disputes and Court procedures</p>
                            <p>- Statements regarding the application of the Labour Code</p>
                        </div>
                    </div>
                </ProductWrapper>
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <h4>Legal advice on Intellectual property & protection:</h4>
                        <div className="info">
                            <p>- Protection and conceding of copyrights</p>
                            <p>- Registration of trademarks and industrial samples</p>
                            <h4>Preparation & consulting of CONSTRUCTION Agreements as per the Bulgarian Law, FIDIC
                            Conditions of Contracts ect, Project, Design & Construction Contracts in specific business
                            areas: gas pipelining & gas pipeline repairing, WWTP (wastewater treatment plants) ect</h4>
                        </div>
                    </div>
                </ProductWrapper>
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <h4>Full Legal services re: PUBLIC PROCUREMENT PROCEDURES incl:</h4>
                        <div className="info">
                            <p>- Preparation of Tender documentation with regards to participation in Public Procurement</p>
                            <p>- Procedures in due compliance with the requirements of the Public Procurement Act of Bulgaria and
                                the relevant Bulgarian legislation.</p>
                            <p>- Legal statements and Draft Agreements (inclusive of Consortium Agreements, Multinational Joint
                                Venture Agreements, Public Procurement Agreements)</p>
                            <p>- Representation and consultings in negotiations and meetings</p>
                            <p>- Disputes, Claims, Appeal before the Competition Protection Commission. Court Procedures ect</p>
                        </div>
                    </div>
                </ProductWrapper>
            </div>
        )
    }
}

const ProductWrapper = styled.div`
    .card{
        border-radius: 0.5rem;
        transition:all 0.5s linear;
        border: transparent;
        margin-left: 0.5px;
        margin-right: 0.5px;
        background: none;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
    }
    &:hover{
        .card{
            border: 2px solid var(--blueGreen);
            border-top: 15px solid var(--blueGreen);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
            background: var(--blueGreen-opacity);
            h4{
                color: var(--yellowGreen);
            }
        }
        .info{
            visibility:visible;
            transition: 1s linear; 
        }
    }
    .info {
        visibility: hidden;
    }
`