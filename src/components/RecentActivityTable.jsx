import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecentActivityTable = () => {
    return (
        <div className='recent-activity'>
            <div className="main-title-wrapper">
                <h2>Recent Activity</h2>
            </div>
            <div className='table-container'>
                <Container>
                    <Row className='table-wrapper'>
                        <div className="custom-table">
                            <div className="table-head">
                                <div className="row">
                                    <Col><span>Event</span></Col>
                                    <Col><span>Price</span></Col>
                                    <Col><span>From</span></Col>
                                    <Col><span>To</span></Col>
                                    <Col><span>Date</span></Col>
                                </div>
                            </div>
                            <div className="table-body">
                                <div className="row">
                                    <Col><span className='status'>Mint</span></Col>
                                    <Col><span className='d-block' style={{ fontFamily: 'Poppins-Bold' }} >1.5</span>
                                        <span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Medium' }}>GBP4,797.45</span>
                                    </Col>
                                    <Col>
                                        <div class='d-flex align-item-center' style={{ wordBreak: 'break-all' }}>
                                            <img style={{ width: '30px', height: '30px', borderRadius: '12px' }} src='assets/images/100.png' />
                                            <span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Medium' }} className='ms-1 ens-name'>0x00000...0000</span>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class='d-flex align-item-center' style={{ wordBreak: 'break-all' }}>
                                            <img style={{ width: '30px', height: '30px', borderRadius: '12px' }} src='assets/images/100.png' />
                                            <span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Medium' }} className='ms-1 ens-name'>kiideas</span>
                                        </div>
                                    </Col>
                                    <Col><span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Medium' }} >5 months ago</span></Col>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="link pt-2" style={{ maxWidth: '793px', margin: 'auto' }}>
                <Link rel="stylesheet" href="">View all token activity on Etherscan.io</Link>
            </div>
        </div >
    )
}

export default RecentActivityTable
