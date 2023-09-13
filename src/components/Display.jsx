import React from 'react';
import { Clock } from './Clock';
import { Stopwatch } from './Stopwatch';

const Display = ({ display }) => {
    return (
        display === 'stopwatch' ? <Clock /> : <Stopwatch />
    )
};

export { Display };