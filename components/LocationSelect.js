'use client'
import React from 'react';
import {useState} from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import TemplateDemo from "@/components/TemplateDemo";


const LocationSelect = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    return (
        <div className={''}>
            <TemplateDemo/>
        </div>
    );
};

export default LocationSelect;
