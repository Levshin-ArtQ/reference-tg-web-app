import React from 'react';
import PropTypes from 'prop-types';
import './BookingTable.css'

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    // return days[date.getDay()];
    return days[date];
  }

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
    const handleClick = (rowIndex, cellIndex) => {
        const cellData =
          data[rowIndex][Object.keys(data[rowIndex])[cellIndex]];
        console.log(
          `Cell clicked: Row ${rowIndex}, Cell ${cellIndex}, Value: ${cellData}`
        );
      };

      return (
        <div className="container">
          <h3>React Js Table Cell Clickable</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Age</th>
                {weekData.map((item, itemIndex) =>(
                    <th>
                        {item.date} 
                        {item.weekday}
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={row.id}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      onClick={() => handleClick(rowIndex, cellIndex)}
                      className="cell"
                    >
                      {cell}
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