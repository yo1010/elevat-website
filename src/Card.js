import React, { Component } from 'react';
import CardItem from './CardItem';

export default class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sub-title">
                    <h3>
                        Services & Practice Areas
                    </h3>
                </div>
                <div className="inbetween-line mx-auto" data-aos="fade-left" data-aos-duration="600"></div>
                <div className="container">
                    <CardItem content={
                        <div className="ml-auto mr-5 card mt-5 firstCard" data-aos="fade-right" data-aos-duration="1000">
                            <div className="card-header leftCard firstCard">
                                <h4>Corporate Law</h4>
                            </div>
                            <div className="card-text mx-3 my-3">
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
                    }/>
                    <CardItem content={
                        <div className="mr-auto ml-5 card mt-5 secondCard" data-aos="fade-left" data-aos-duration="1000">
                            <div className="card-header rightCard secondCard">
                                <h4>Contract & Labour Law</h4>
                            </div>
                            <div className="card-text mx-3 my-3">
                                <p>- Preparation of all kinds of named and unnamed agreements, responding to the interests and
                                purposes of the parties</p>
                                <p>- Representation in negotiations and meetings, Legal statements and Consultings</p>
                                <p>- Labour and Employment Contracts</p>
                                <p>- Legal defense of the interests of the Empoyer/Empoyee in Disputes and Court procedures</p>
                                <p>- Statements regarding the application of the Labour Code</p>
                            </div>
                        </div>
                    }/>
                    <CardItem content={
                        <div className="ml-auto mr-5 card mt-5 thirdCard" data-aos="fade-right" data-aos-duration="1000">
                            <div className="card-header leftCard thirdCard">
                                <h4>Intellectual Property & <h4>Construction Agreements</h4></h4>
                            </div>
                            <div className="card-text mx-3 my-3">
                                <p>- Protection and conceding of copylefts</p>
                                <p>- Registration of trademarks and industrial samples</p>
                                <p>- Preparation & consulting of CONSTRUCTION Agreements as per the Bulgarian Law, FIDIC
                                    Conditions of Contracts ect, Project, Design & Construction Contracts in specific business
                                    areas: gas pipelining & gas pipeline repairing, WWTP (wastewater treatment plants) ect</p>
                            </div>
                        </div>
                    }/>
                    <CardItem content={
                        <div className="mr-auto ml-5 card mt-5 fourthCard" data-aos="fade-left" data-aos-duration="500">
                            <div className="card-header rightCard fourthCard">
                                <h4>Public procurement procedures</h4>
                            </div>
                            <div className="card-text mx-3 my-3">
                                <p>- Preparation of Tender documentation with regards to participation in Public Procurement</p>
                                <p>- Procedures in due compliance with the requirements of the Public Procurement Act of Bulgaria and
                                    the relevant Bulgarian legislation.</p>
                                <p>- Legal statements and Draft Agreements (inclusive of Consortium Agreements, Multinational Joint
                                    Venture Agreements, Public Procurement Agreements)</p>
                                <p>- Representation and consultings in negotiations and meetings</p>
                                <p>- Disputes, Claims, Appeal before the Competition Protection Commission. Court Procedures ect</p>
                            </div>
                        </div>
                    }/>
                </div>
            </React.Fragment>
            
        )
    }
}