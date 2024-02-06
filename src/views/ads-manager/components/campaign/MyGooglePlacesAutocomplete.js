import React, { useState } from 'react';

import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const MyGooglePlacesAutocomplete = (props) => {
    const [locations, setLocations] = useState([]);

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetLocationsList } = state_ExtraLC;

    const handleChangeLocation = (locate) => {
        // console.log('handleChangeLocation: ', locate);
        let arrTemp = [...locations];
        arrTemp.push({ id: undefined, name: locate.label });
        setLocations(arrTemp);
        geocodeByAddress(locate.label)
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                let _location = { id: undefined, name: locate.label, lat: lat, lng: lng, radius: 10, place_id: locate.value.place_id };
                let arrTemp = [...extra_amSelectedAdSetLocationsList];
                arrTemp.push(_location);
                dispatch_ExtraLC({
                    type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
                    payload: arrTemp
                });
                props.refreshChild();
            });
    };

    return (
        <>
            <GooglePlacesAutocomplete
                apiKey={GOOGLE_MAP_API_KEY}
                onLoadFailed={(error) => console.error('Could not inject Google script', error)}
                selectProps={{
                    locations,
                    onChange: (locate) => handleChangeLocation(locate),
                    styles: {
                        control: (provided, state) => ({
                            ...provided,
                            backgroundColor: '#f4f7fa', // Change the background color of the control
                            border: state.isFocused ? '1px solid #80bdff' : '1px solid #ced4da',
                            boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none'
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            color: 'transparent'
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            color: '#aaaeb3' // Change the font color of the placeholder
                        }),
                        indicatorSeparator: (provided) => ({
                            ...provided,
                            display: 'none'
                        }),
                        indicatorContainer: (provided) => ({
                            ...provided,
                            display: 'none'
                        })
                    },
                    placeholder: 'Add location (address, city, country, etc)'
                }}
            />
        </>
    );
};

export default MyGooglePlacesAutocomplete;
