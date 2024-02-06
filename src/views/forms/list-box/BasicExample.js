import React, { useState } from 'react';
import DualListBox from 'react-dual-listbox';

const options = [
    { value: 'luna', label: 'Moon' },
    { value: 'phobos', label: 'Phobos' },
    { value: 'deimos', label: 'Deimos' },
    { value: 'io', label: 'Io' },
    { value: 'europa', label: 'Europa' },
    { value: 'ganymede', label: 'Ganymede' },
    { value: 'callisto', label: 'Callisto' },
    { value: 'mimas', label: 'Mimas' },
    { value: 'enceladus', label: 'Enceladus' },
    { value: 'tethys', label: 'Tethys' },
    { value: 'rhea', label: 'Rhea' },
    { value: 'titan', label: 'Titan' },
    { value: 'iapetus', label: 'Iapetus' }
];

const BasicExample = () => {
    const [selected, setSelected] = useState(['phobos', 'titan']);

    const onChange = (selected) => {
        setSelected(selected);
    };

    return <DualListBox options={options} selected={selected} onChange={(e) => onChange(e)} />;
};

export default BasicExample;
