import React from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'

const ConnectModal = (props) => {
    return (

        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='connect-modal'>

                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className='card-wrapper'>
                                <div>
                                    <div className='same-card-style'>
                                        <img src="/assets/images/modal-img-1.svg" alt="" />
                                        <h3>MetaMask</h3>
                                        <p>Connect to your Metamask Wallet</p>
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6} className='card-wrapper'>
                                <div>
                                <div className='same-card-style'>
                                    <img src="/assets/images/modal-img-2.svg" alt="" />
                                    <h3>WalletConnect</h3>
                                    <p>Scan with WalletConnect to connect</p>
                                </div>
                                </div>
                            </Col>

                            <Col xs={12} md={6} className='card-wrapper'>
                                <div>
                                <div className='same-card-style'>
                                    <img src="/assets/images/modal-img-3.svg" alt="" />
                                    <h3>Portis</h3>
                                    <p>Connect with your Portis account</p>
                                </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='card-wrapper'>
                                <div>
                                <div className='same-card-style'>
                                    <img src="/assets/images/modal-img-4.svg" alt="" />
                                    <h3>Fortmatic</h3>
                                    <p>Connect with your Fortmatic account</p>
                                </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ConnectModal
