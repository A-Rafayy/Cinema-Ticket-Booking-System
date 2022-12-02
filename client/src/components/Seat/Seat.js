import React from 'react'
import "./Seat.css"

const Seat = ({name, color}) => {
    return (
        <div className='Seat-div1' style={{backgroundColor: color}}>
            <h4>{name}</h4>
        </div>
    )
}

export default Seat