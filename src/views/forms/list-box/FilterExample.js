import React, { useState } from 'react';
import DualListBox from 'react-dual-listbox';

const options = [
    {
        label: 'Earth',
        options: [{ value: 'luna', label: 'Moon' }]
    },
    {
        label: 'Mars',
        options: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' }
        ]
    },
    {
        label: 'Jupiter',
        options: [
            { value: 'io', label: 'Io' },
            { value: 'europa', label: 'Europa' },
            { value: 'ganymede', label: 'Ganymede' },
            { value: 'callisto', label: 'Callisto' }
        ]
    }
];

const FilterExample = () => {
    const [selected, setSelected] = useState(['luna', 'io']);

    const onChange = (selected) => {
        setSelected(selected);
    };

    return <DualListBox canFilter name="moons" options={options} selected={selected} onChange={(e) => onChange(e)} />;
};
export default FilterExample;
