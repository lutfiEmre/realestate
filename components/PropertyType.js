'use client'
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function PropertyType() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Apartment', },
        { name: 'Dublex', },
        { name: 'Villa', },
        { name: 'Single-family home', },
        { name: 'Condominium', },
        { name: 'Townhouse', }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex p-2 align-items-center">
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
                    <h1>no <b>property</b> selected</h1>
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Property Type"
                      valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full p-2 md:w-14rem" panelFooterTemplate={panelFooterTemplate}
                      dropdownIcon={(opts) => {
                          return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                      }}/>
        </div>
    )
}
