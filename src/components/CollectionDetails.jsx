import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CollectionDetails = () => {
    return (
        <div className='collection-detail'>
            <div className="main-title-wrapper">
                <h2>Collection Details</h2>
            </div>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <video width="586px" controls>
                            <source src="mov_bbb.mp4" type="video/mp4" />
                            <source src="mov_bbb.ogg" type="video/ogg" />
                            Your browser does not support HTML video.
                        </video>
                    </Col>
                </Row>
                <Row className='py-5 originalart-row'>
                    <Col sm={12} md={6}>
                        <img src="assets/images/responsive.png" style={{width:'100%'}} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="content-wrapper">
                            <div className="content">
                                <h2 className='pt-3 pt-sm-4 pt-md-0' style={{fontSize:'24px'}}>The Original Art</h2>
                                <h3 style={{fontSize:'16px'}}>The birth of Responsive Ram!</h3>
                                <p>Each collectible was orginially hand drawn by GrayVee,
                                    The main ambitions of this project is to create meangiful
                                    intellectual property and create an extraordinary community.
                                    All tokens are a three-year admission token to VeeCon,
                                    an annual super-conference. We know a lot of you are
                                    new to the NFT world, so before you do anything, get
                                    acquainted with the FAQs.</p>
                            </div>
                        </div>


                    </Col>
                </Row>

            </Container>







        </div >
    )
}

export default CollectionDetails
