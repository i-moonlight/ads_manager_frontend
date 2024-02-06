import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
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

const planets = {
    earth: { name: 'Earth', moons: ['luna'] },
    mars: { name: 'Mars', moons: ['phobos', 'deimos'] },
    jupiter: { name: 'Jupiter', moons: ['io', 'europa', 'ganymede', 'callisto'] },
    saturn: { name: 'Saturn', moons: ['mimas', 'enceladus', 'tehys', 'rhea', 'titan', 'iapetus'] }
};

const RestrictAvailableExample = () => {
    const [selected, setSelected] = useState(['phobos', 'titan']);
    const [planet, setPlanet] = useState('jupiter');

    const onChange = (selected) => {
        setSelected(selected);
    };

    const onPlanetChange = (event) => {
        const newPlanet = event.currentTarget.value;
        setPlanet(newPlanet);
    };

    const renderPlanets = () => {
        return Object.keys(planets).map((item) => (
            <Form.Group key={item} className="d-inline">
                <div className="radio d-inline radio-primary">
                    <Form.Control
                        type="radio"
                        name="planets"
                        id={item}
                        value={item}
                        defaultChecked={item === planet}
                        onChange={(e) => onPlanetChange(e)}
                    />
                    <Form.Label htmlFor={item} className="cr">
                        {planets[item].name}
                    </Form.Label>
                </div>
            </Form.Group>
        ));
    };

    return (
        <div className="restrict-available-container">
            <div className="moons mb-3">{renderPlanets()}</div>
            <DualListBox available={planets[planet].moons} options={options} selected={selected} onChange={(e) => onChange(e)} />
        </div>
    );
};

export default RestrictAvailableExample;
