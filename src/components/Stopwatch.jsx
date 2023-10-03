import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    useEffect(() => {
        if(startTime) {
            intervalRef.current = setInterval(() => {
                setNow(Date.now());
            }, 10);
        };
        return () => {clearInterval(intervalRef.current)};
    }, [startTime, now]);
    const handleStart = () => {
        setStartTime(Date.now());
    };
    const handleStop = () => {
        clearInterval(intervalRef.current);
    };
    let timePassed = {
        min: 0,
        sec: 0,
        milli: 0
    };
    if (startTime != null && now != null) {
        timePassed = {
            min: Math.floor((Math.floor((now - startTime) / 1000)) / 60) % 60,
            sec: Math.floor((now - startTime) / 1000) % 60,
            milli: (now - startTime) % 1000
        };
    };
    return (
        <>
            <h1 id='stopwatch' className='stopwatch'>
                <span className='stopwatch__minutes'>{timePassed.min.toLocaleString().padStart(2, 0)}</span>
                : <span className='stopwatch__seconds'>{timePassed.sec.toLocaleString().padStart(2, 0)}</span>
                <span className='stopwatch__miliSeconds'>{timePassed.milli.toLocaleString().padStart(3, 0)}</span>
            </h1>
            <div className='stopwatch__buttons'>
                <button onClick={() => handleStart()} className='btn btn__start'>Start</button>
                <button onClick={() => handleStop()} className='btn btn__stop'>Stop</button>
            </div>
        </>
    )
};

export { Stopwatch };