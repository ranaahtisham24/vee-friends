import React from 'react'

function LeftComp({data}) {
    return (
        
            <div className="timeline-container left">
                <div className="date">
                    <div className="announcement" style={{ visibility: 'hidden' }}>
                        <span>ALMOST TIME!</span>
                    </div>
                    <div className="month pt-1">
                        <span>{data.month}</span>
                    </div>
                    <div className="day">
                        <span>{data.day}</span>
                    </div>
                    <div className="year">
                        <span>{data.year}</span>
                    </div>
                </div>
                <div className="content d-flex align-items-stretch">
                    <div>
                        <img src="assets/images/Group 104.svg" alt="" />
                    </div>
                    <div>
                        <h2>{data.title}</h2>
                        <p>
                            {data.desc}
                        </p>
                    </div>
                </div>
            </div>
    
    )
}

export default LeftComp
