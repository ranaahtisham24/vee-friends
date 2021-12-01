import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const GarrysCollectionTokens = () => {

    const selector = useSelector(s => s.cardReducer)
    const { garryCollectionArray } = selector

    return (
        <>
            <div class="main-title-wrapper"><h2>Collection</h2></div>
            <Container className='custom-contain-sm'>
                <Row className='mx-sm-1 mx-1'>
                    <Col className='ps-0'>
                        <span style={{fontFamily:'Poppins-Semibold', fontSize:'18px'}}>{garryCollectionArray.length} Tokens</span>
                    </Col>
                    <Col className='pe-0' style={{textAlign:'right'}}>
                        <span style={{fontFamily:'Poppins-Semibold', fontSize:'18px'}}>View all</span>
                    </Col>
                </Row>
                
                <hr className='card-header-line' />

                <Row xs={1} md={4} className="g-4 card-wrapper py-5">
                    {garryCollectionArray.map((obj, ind) => (
                        <Col className='custom-card-container' sm={6} xs={12} md={4} lg={3} key={ind} >
                            <Card style={{ borderRadius: '12px' }}>
                                <Card.Img style={{ borderTopLeftRadius: '3%', borderTopRightRadius: '3%', backgroundColor: '#F8F8F8' }} variant="top" src={obj.cardImage} />
                                <Card.Body className='p-2'>
                                    <Card.Title className='heading-font text-center mb-0' style={{ fontSize: '14px', color: '#49E442', fontFamily: 'Poppins-Semibold' }}>{obj.title}</Card.Title>
                                    <Row style={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Col className='col-12'>
                                            <h3 className='heading-font mb-0' style={{ fontSize: '16px', fontFamily: 'Poppins-bold' }}>{obj.value}</h3>
                                        </Col>
                                        <Col className='col-12'>
                                            <p style={{ fontSize: '12px' }}>TOTAL</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default GarrysCollectionTokens
