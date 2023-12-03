import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookingTable.css'

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    // return days[date.getDay()];
    return days[date];
  }

const seanceHours = [
    {id: 0, time: '9:00'},
    {id: 1, time: '10:30'},
    {id: 2, time: '12:00'},
    // {id: 3, time: '13:30'},
    {id: 4, time: '15:00'},
    {id: 5, time: '16:30'},
    {id: 6, time: '18:00'},
    {id: 7, time: '19:30'},
];

function getDate(i) {
    
    let today = new Date();
    console.log(today.setDate(today.getDate() + 28 + parseInt(i)));

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const weekday = getWeekDay(today.getDay());
    console.log('date:' + date)
    console.log('weekday:' + weekday)
    return {date, weekday}
    // return `${month}/${date}/${year}/${weekday}`;
  }
function getWeek() {
    let week = []
    for (let i = 0; i < 6; i++) {
        week.push(getDate(i));
    }
    return week;
}

const weekData = getWeek();
const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
];

const BookingTable = () => {
    const [selected, setSelected] = useState(-1)
    const handleClick = (rowIndex, cellIndex) => {
        const cellData =
          seanceHours[rowIndex][Object.keys(seanceHours[rowIndex])[cellIndex]];
        
        setSelected({rowIndex, cellIndex});
        console.log(
          `Cell clicked: Row ${rowIndex}, Cell ${cellIndex}, Value: ${cellData}`
        );
        console.log(selected)
      };

      return (
        <div className="container">
          <h3>React Js Table Cell Clickable</h3>
          <table className="custom-table">
            <thead>
              <tr>
                {weekData.map((item) =>(
                    <th>
                        {item.date} 
                        {item.weekday}
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
                {seanceHours.map((row, rowIndex) => (
                    <tr key={row.id}>
                        {weekData.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                onClick={() => handleClick(rowIndex, cellIndex)}
                                className="cell"
                                tabIndex={0}
                                style={{background: selected.rowIndex === rowIndex && selected.cellIndex === cellIndex ? 'red' : ''}}
                            >   
                                {row.time}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
};

BookingTable.propTypes = {};

export default BookingTable;