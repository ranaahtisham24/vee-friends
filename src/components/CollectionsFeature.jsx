import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tilt from "react-parallax-tilt";
import { useSelector } from 'react-redux';


const CollectionsFeature = () => {

    const data = useSelector(s => s.cardReducer)
    const {cardImage, logo, logoTitle, title, value, valueTitle} = data.tokenCard

    return (
        <div>
            <div className='postdetail-feature collections-feature-wrap'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={6} className='text-center'>
                            <Tilt style={{height: '100%'}}>
                                <img src={cardImage ? cardImage : "assets/images/Group 178.svg"} alt="" style={{height: '24vmax'}}/>
                            </Tilt>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="edition">
                                <span>#04293</span>  <span>2 OF 8</span>
                            </div>
                            <h1>{title ? title : 'Accountable Anteater'}</h1>
                            <div className="description">
                                <p><span>{logoTitle ? logoTitle : 'Card Type'}</span></p>
                            </div>

                            <div className="admission-redeem my-2">
                                <span>VeeCon Admission</span>
                            </div>
                            <h3>Details</h3>
                            <div className="details">
                                <p>This token is verified for admission to VeeCon 2022, 2023, 2024 This token is a collectible that lives on the Ethereum blockchain</p>
                            </div>
                            <Row className='mx-1'>
                                <Col>
                                    <Row className='text-center stats-pannel' style={{ border: '1px solid #CECBCB', borderRadius: '6px' }}>
                                        <Col>
                                            <div className='total'>
                                                <span>{value ? value : '0'}</span>
                                            </div>
                                            <div className='small-desc'>
                                                <span style={{ color: '#8D8D8D', fontFamily: 'Poppins-Semibold' }}>Total</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='total owners'>
                                                <span>{value ? value : '0'}</span>
                                            </div>
                                            <div className='small-desc'>
                                                <span style={{ color: '#8D8D8D', fontFamily: 'Poppins-Semibold' }}>Owners</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='total average'>
                                                <span>2.82</span>
                                            </div>
                                            <div className='small-desc'>
                                                <span style={{ color: '#8D8D8D', fontFamily: 'Poppins-Semibold' }}>Average Price</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CollectionsFeature
