import React from 'react';

function Time() {
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();

  const nw_day = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
    'saturday',
  ];
  const nw_month = [
    'january',
    'feb',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'nov',
    'dec',
  ];

  const new_month = nw_month[month];
  const new_day = nw_day[day];
  const new_date = date;
  const year = new Date().getFullYear();

  return (
    <div className='date_formate'>
      <h4>
        {new_month} {new_date}, {year}
      </h4>
      <h4>{new_day}</h4>
    </div>
  );
}

export default Time;
