import React from 'react'
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'
import Slider from '../components/Slider'
import TimelineNew from '../components/TimelineNew'

const Home = () => {

    return (
        <div className='Homepage-wrapper'>
            <Hero />
            <LatestPosts />
            <Slider />
            <TimelineNew />
            <Faqs />
        </div>
    )
}

export default Home
