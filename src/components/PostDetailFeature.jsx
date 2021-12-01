import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tilt from "react-parallax-tilt";
import { useSelector } from 'react-redux';



const PostDetailFeature = () => {

    const selector = useSelector(s => s.cardReducer)
    const { admissionToken, cardImage, cardTitle, cardType, color, onSale, logo, titleImg, cardCode } = selector.latestCard


    return (
        <div className='postdetail-feature'>
            <Container>
                <Row>
                    <Col sm={12} md={6} className='text-center' style={{ margin: '10px 0' }}>
                        <Tilt>
                            <img src={cardImage} style={{ height: '25vmax', width: '20vmax' }} alt="" />
                        </Tilt>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="edition">
                            <span>{cardCode ? cardCode : '#0000 111 of 222'}</span>
                        </div>
                        <h1>{cardTitle}</h1>
                        <div className="description">
                            <p><span>{cardType}</span></p>
                            <p><span>Admission Token · {admissionToken}</span></p>
                        </div>
                        <div className="admission-redeem my-2">
                            <span>VeeCon Admission</span>
                        </div>
                        <h3>Details</h3>
                        <div className="details">
                            <p>This token is verified for admission to VeeCon 2022, 2023, 2024 This token is a collectible that lives on the Ethereum blockchain</p>
                        </div>
                        <Row>
                            <Col className='my-4 my-sm-4 my-md-4' md={6}>
                                <Link to='#'>
                                    <img style={{ width: '100%' }} src="assets/images/etherscan-badge-white.png" alt="" />
                                </Link>
                            </Col>
                            <Col className='my-0 mb-4 mb-sm-4 my-sm-0 my-md-4' md={6}>
                                <Link to='#'>
                                    <img style={{ width: '100%' }} src="assets/images/opeansea-badge-white.png" alt="" />
                                </Link>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-between' style={{ borderRadius: '9px', padding: '18px', alignItems: 'center', boxShadow: '0px 3px 6px #00000029' }}>
                                    <div>
                                        <div> <i className="far fa-tag fa-flip-horizontal tag-icon" ></i> <span style={{ fontFamily: 'Poppins-Bold', color: '#A1A1A1' }}>Last Sale <span className='triple-equal-sign' >Ξ</span> <span className='date'>11</span></span></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <img src={logo ? logo : '/assets/images/bull.png'} alt="" style={{ width: '4rem', borderRadius: '50%' }} />
                                        </div>
                                        <div>
                                            <span className='d-block'>*e*</span>
                                            <span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Bold' }}>0xace94...e719</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostDetailFeature
