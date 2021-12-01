import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>
            <Container fluid>
                <Row>
                    <Col md={6} sm={12}>
                        <h5>
                            See you at VeeCon
                        </h5>
                        <p className='pb-2'>Subscribe and stay up to date on the newest updates.</p>
                        <form action="">
                            <div className="input-wrapper">
                                <input type="email" className='form-control' placeholder='E-mail' />
                                <Button type='submit btn'>Join Us!</Button>
                            </div>
                        </form>
                    </Col>
                    <Col md={6} sm={12}>
                        <h5 className='mb-0 pt-4 pt-sm-4 pt-md-0'>Follow the VeeFriends!</h5>
                        <Link to="/">
                            <img src="assets/images/discord.svg" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="assets/images/twitter-btn.svg" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="assets/images/insta.svg" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="assets/images/tiktok.svg" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="assets/images/youtube.svg" alt="" />
                        </Link>
                    </Col>
                </Row>
                <hr  />
                <Row className>
                    <Col lg={6} sm={12}>
                        <h6>VeeFriends, LLC2021</h6>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <h6>Vee Friends</h6>
                                <ul className='list-unstyled'>
                                    <li>
                                        <Link to="/">Library</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Explore All</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Gary's Collection</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Access</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Gift</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Top 5</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6}>
                                <h6>Connect</h6>
                                <ul className='list-unstyled'>
                                    <li><Link to="/">My Profile</Link></li>
                                    <li><Link to="/">FAQ'S</Link></li>
                                    <li><Link to="/">Discord</Link></li>
                                    <li><Link to="/">Instagram</Link></li>
                                    <li><Link to="/">Twitter</Link></li>
                                    <li><Link to="/">YouTube</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <h6>GrayVee</h6>
                                <ul className='list-unstyled'>
                                    <li><Link to="/">VeeCon</Link></li>
                                    <li><Link to="/">Garyvaynerchuk.com</Link></li>
                                    <li><Link to="/">VaynerNFT</Link></li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Footer
