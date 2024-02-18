import React from 'react';

const getData = async () => {
        const res = await fetch('/api/homes',{ cache: 'no-cache' })

        if (!res.ok){
            throw new Error('Failed to fetch data')
        }
        return res.json()
};

export default getData();
