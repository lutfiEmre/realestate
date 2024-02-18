'use client'

import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'


const ReactRange = () => {
    const [value, setValue] = useState(500);

    const handleChangeStart = () => {
        console.log('Change event started');    };

    const handleChange = (value) => {
        setValue(value);
    };

    const handleChangeComplete = () => {
        console.log('Change event completed');
    };

    return (
        <div className='slider'>
            <Slider
                min={500}
                max={10000}
                value={value}
                onChangeStart={handleChangeStart}
                onChange={handleChange}
                onChangeComplete={handleChangeComplete}
            />
            <div className='value text-dark600 murecho-medium'>{value}$</div>
        </div>
    );
};

export default ReactRange;
