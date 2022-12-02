import React from 'react'
import Seat from '../Seat/Seat';

const BookingScreen = () => {
    const rows = [{}, {}, {}, {}];
    const columns = [{}, {}, {}, {}];
    const color = "blue";
    let i = 0;
    const structure = rows.map((r) => <div style={{ display: "flex" }}>{columns.map(c => <div style={{backgroundColor: color}} onClick={() => {}}><Seat key={i++} name={i} color={color} /></div>)}</div>)
    return (
        <div style={{ backgroundColor: "red" }}>
            <h1>Booking Screen</h1>
            {structure}
        </div>
    )
}

export default BookingScreen