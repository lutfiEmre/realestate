'use client'
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function TemplateDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Turkey', code: 'TR' },
        { name: 'America', code: 'US' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src={`https://flagsapi.com/${option.code}/flat/64.png`} className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center p-2">
                <img alt={option.name} src={`https://flagsapi.com/${option.code}/flat/64.png`} className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    <h1>No <b>country</b> selected.</h1>
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center ">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Location"
                      valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full p-2 md:w-14rem" panelFooterTemplate={panelFooterTemplate}
                      dropdownIcon={(opts) => {
                          return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                      }}/>
        </div>
    )
}
