import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
//
import SliderLocation from './SliderLocation';

const LocationsList = () => {
  const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
  const { extra_amSelectedAdSetLocationsList } = state_ExtraLC;

  const handleRemoveLocationItem = (name) => {
    const updatedList = extra_amSelectedAdSetLocationsList.filter(
      (item) => item.name !== name
    );
    dispatch_ExtraLC({
      type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
      payload: updatedList,
    });
  };

  const locationsTemplate = (itemLocation) => {
    const { name, gps_lat, gps_lng, radius, place_id } = itemLocation;

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '10px',
          paddingBottom: '10px',
          alignItems: 'center',
          justifyContent: 'space-between',          
          width: '100%', 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <i
            style={{ color: 'green', marginRight: '3px' }}
            className="pi pi-map-marker"
          ></i>
          <span>{name ? name : `${gps_lat}, ${gps_lng}`}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          <div style={{ marginLeft: '10px' }}>
            <MegaMenu
            className="small-button"
                style={{ fontSize: 'inherit', marginBottom: '1px', marginTop: '1px', border: 'unset', flexShrink: '0', padding: '0px', background:'transparent' }}
              model={[
                {
                  label: '+' + String(radius) + 'mi',
                  icon: null,
                  items: [
                    [
                      {
                        label: (
                          <div id={String(place_id)} >
                            <div>Distance from location</div>
                            <hr />
                            <div>
                              <SliderLocation itemLocation={itemLocation} />
                            </div>
                          </div>
                        ),
                        items: [],
                      },
                    ],
                  ],
                },
              ]}
            />
          </div>
          <i
            onClick={() => handleRemoveLocationItem(name)}
            style={{ cursor: 'pointer', fontSize: 'smaller', marginLeft: '15px' }}
            className="pi pi-times"
          ></i>
        </div>
      </div>
    );
  };

  return (
    <>
      {extra_amSelectedAdSetLocationsList.map((item) => (
        <div key={item.place_id}>{locationsTemplate(item)}</div>
      ))}
    </>
  );
};

export default LocationsList;