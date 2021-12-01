import React, { useState } from 'react'
import LeftComp from './LeftComp'
import RightComp from './RightComp'

const TimelineNew = () => {
    const mainArray = [
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
        { title: 'Keynote Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space", day: '12', month: 'Aug', year: '2014' },
        { title: 'Key Koala', desc: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the", day: '14', month: 'Sep', year: '2018' },
    ]
    const leftArray = []
    const rightArray = []

    for (let index = 0; index < mainArray.length; index++) {
        if (index % 2 === 0) {
            leftArray.push(<LeftComp data={mainArray[index]} />)
        }
        else {
            rightArray.push(<RightComp data={mainArray[index]} />)
        }

    }

    const [displayArray, setdisplayArray] = useState([''])
    console.log("🚀 ~ file: TimelineNew.jsx ~ line 43 ~ TimelineNew ~ displayArray", displayArray.length, mainArray.length)

    const addItems = () => {
        for (let index = displayArray.length; index < displayArray.length + 2; index++) {
            console.log('inside loop')
            setdisplayArray([...displayArray, index + 1])

        }
    }

    const btns = 'Show more'

    return (
        <div className='timeline-wrapper'>
            <div className="main-title-wrapper">
                <h2>Timeline</h2>
            </div>
            {
                displayArray.map((data, index) =>
                    <div key={index} className="timeline">
                        {leftArray[index]}
                        {rightArray[index]}

                    </div>
                )
            }

            {/* <div className="timeline-container active left">
                    <div className="date">
                        <div className="announcement">
                            <span>ALMOST TIME!</span>
                        </div>
                        <div className="month pt-1">
                            <span> Oct</span>
                        </div>
                        <div className="day">
                            <span>14</span>
                        </div>
                        <div className="year">
                            <span>2021</span>
                        </div>
                    </div>
                    <div className="content d-flex align-items-stretch">
                        <div>
                            <img src="assets/images/Group 104.svg" alt="" />
                        </div>
                        <div>
                            <h2>Keynote Koala</h2>
                            <p>
                                VeeFriends community, it's very important for me to enjoy the next
                                45years of building this universe. As anobserve of the overall NFT space,
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-container active right">
                    <div className="date">
                        <div className="announcement">
                            <span>ALMOST TIME!</span>
                        </div>
                        <div className="month pt-1">
                            <span> Oct</span>
                        </div>
                        <div className="day">
                            <span>14</span>
                        </div>
                        <div className="year">
                            <span>2021</span>
                        </div>
                    </div>
                    <div className="content  d-flex align-items-stretch">
                        <div>
                            <img src="assets/images/Group 104.svg" alt="" />
                        </div>
                        <div>
                            <h2>Keynote Koala</h2>
                            <p>
                                VeeFriends community, it's very important for me to enjoy the next
                                45years of building this universe. As anobserve of the overall NFT space,
                            </p>
                        </div>

                    </div>
                </div> */}

            <div className="btn-wrapper text-center">
                {
                    mainArray.length !== (displayArray.length * 2)
                        ?
                        <button className="btn btn-primary" onClick={() => addItems()}
                            style={{ background: '#0AD900', border: '1px solid transparent', fontFamily: 'Poppins-Medium', borderRadius: '16px', padding: '9px 30px' }}>{btns}
                        </button>
                        : 
                        null

                }
            </div>

        </div>
    )
}

export default TimelineNew
