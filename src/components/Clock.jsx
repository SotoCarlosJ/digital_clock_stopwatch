import React, { useState, useEffect } from 'react';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);
    const displayDate = {
        year: time.getFullYear(),
        month: time.getMonth(),
        day: time.getDate(),
        weekDay: time.getDay(),
        hours: time.getHours().toString().padStart(2,0),
        minutes: time.getMinutes().toString().padStart(2,0),
        seconds: time.getSeconds().toString().padStart(2,0)
    }
    return (
        <>
            <h1 className='app__time'>
                <span className='time__hours'>{displayDate.hours}</span>:<span className='time__minutes'>{displayDate.minutes}</span><span className='time__seconds'>{displayDate.seconds}</span></h1>
            <div className='app__date'>
                <h2 className='date__MDY'>{months[displayDate.month]} {displayDate.day}, {displayDate.year}</h2>
                <h2 className='date__WD'>{days[displayDate.weekDay]}</h2>
            </div>
        </>
    )
};

export { Clock };