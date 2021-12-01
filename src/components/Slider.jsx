import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Row, Col, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { latestPostCard } from '../actions/cardData/cardData';
import { useHistory } from 'react-router-dom';


const Slider = () => {

    const dispatch = useDispatch()
    const selector = useSelector(s => s.cardReducer)
    const { sliderCardArray } = selector
    const history = useHistory()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1215 },
            items: 6.2,
        },
        laptop: {
            breakpoint: { max: 1214, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 4.6,
        },
        mobile: {
            breakpoint: { max: 800, min: 710 },
            items: 3.4,
        },
        largeMobile: {
            breakpoint: { max: 709, min: 614 },
            items: 3,
        },
        smallMobile: {
            breakpoint: { max: 613, min: 425 },
            items: 1.8,
        },
        doubleExtraSmallMobile: {
            breakpoint: { max: 424, min: 375 },
            items: 1.6,
        }
    };

    const clickHandler = (obj) => {
        dispatch(latestPostCard(obj, history))
    }

    return (


        <div>

            <div class="main-title-wrapper"><h2>Read Activity</h2></div>

            <div className='slider-main-container'>

                <Carousel
                    ssr
                    partialVisbile
                    itemClass="image-item"
                    responsive={responsive}
                    containerClass="carousel-container"
                    arrows={true}
                    style={{ marginBottom: '20px' }}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    customTransition='transform 1000ms ease-in'
                >

                    {sliderCardArray.map((obj, ind) => (
                        <Col key={ind} className='card-wrapper' key={ind} >
                            <Card style={{ borderRadius: '14px', marginRight: '20px', width: '12.75rem', height: '18.375rem', display: 'flex', flexDirection: 'column' }}
                                className='col-12'
                                onClick={() => clickHandler(obj)}
                            >
                                <div className='slider-card-img'>
                                    <Card.Img style={{
                                        borderTopLeftRadius: '14px', borderTopRightRadius: '14px',
                                        backgroundColor: '#F8F8F8', height: '9.375rem'
                                    }} variant="top" src={obj.cardImage} />
                                </div>
                                <Card.Body style={{ padding: '0.5rem 0.5rem' }}>
                                    <Row style={{ alignItems: 'center', marginTop: '-28px' }}>

                                        <Col className='col-8'>
                                            <div className='pill rounded-pill'
                                                style={{ boxShadow: '0px 3px 6px #00000029', fontSize: '10px', background: 'white', marginTop: '-10px', padding: '6px', zIndex: '10', width: '120%' }}>
                                                <span style={{ color: '#A7A7A7', fontFamily: 'Poppins-Bold' }}>{obj.cardCode}</span>
                                            </div>
                                        </Col>
                                        <Col className='col-4'>
                                            <Image src={obj.logo} className='rounded-pill' style={{ width: '50px' }} alt='' />
                                        </Col>

                                        <Col className='col-2'>
                                            <Image src={obj.titleImg} style={{ width: "14.84px", height: "12.37px", borderRadius: "100%" }} alt="this img" />
                                        </Col>
                                        <Col className='col-10'>
                                            <p style={{ fontSize: '10px' }}>{obj.cardType}</p>
                                        </Col>
                                    </Row>
                                    <Card.Title className='heading-font' style={{ fontSize: '14px' }}>{obj.cardTitle}</Card.Title>
                                    <Row style={{ alignItems: 'center' }}>

                                        <Col>
                                            <p style={{ fontSize: '10px' }}>{obj.admissionToken}</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <span className='card-footer d-flex' style={{ justifyContent: 'space-between', marginTop: '6px' }}>

                                            <span className='d-flex'>
                                                <i className="far fa-tag fa-flip-horizontal tag-icon" style={{ color: 'white' }}></i>
                                                <p>Last Sale</p>
                                            </span>
                                            <div><p><span className='triple-equal-sign'>Ξ</span>10</p></div>
                                        </span>
                                    </Row>

                                </Card.Body>


                            </Card>
                        </Col>
                    ))}
                    {/* </div> */}
                </Carousel>
            </div>
        </div>
    )
}

export default Slider
