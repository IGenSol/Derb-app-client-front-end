import React, { useEffect, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete/dist/PlacesAutocomplete";

import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { getLat, getLng, setLatLong } from "../../utils/Common";

import { MapModalStyle } from "./MapModel.style";

const Map = (props) => {
  const latData = getLat();
  const lngData = getLng();

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: latData, lng: lngData }}>
      <Marker position={{ lat: latData, lng: lngData }} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

function MapModel(props) {
  const { isModalVisible, handleOk, handleCancel, lat, lng } = props;
  const getAddress = JSON.parse(sessionStorage.getItem("address"));
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const latLang = await getLatLng(result[0]);

    setLatLong(latLang.lat, latLang.lng);
  };

  useEffect(() => {
    setAddress(getAddress);
  }, []);

  const onAddresSubmit = () => {
    sessionStorage.setItem("address", JSON.stringify(address));

    window.location.reload();
  };

  return (
    <MapModalStyle
      title="Is this your exact location?"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <fieldset className="input-container">
        <legend className="heading">Enter your full address</legend>

        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect && handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <article className="search-location">
              <input
                {...getInputProps({ placeholder: "Enter your adress" })}
                type="text"
                className="custom-container"
                name="search"
              />

              <article className="dropdown-list">
                {loading ? <div>...Loading</div> : null}

                {suggestions &&
                  suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#ffb602" : "#fff",
                    };

                    return (
                      <article
                        className="place-suggestion"
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        {suggestion.description}
                      </article>
                    );
                  })}
              </article>
            </article>
          )}
        </PlacesAutocomplete>
      </fieldset>

      <article className="map-container">
        <WrappedMap
          lat={lat}
          lng={lng}
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDy-XbDbZylrWFPmTl4JnEpOTKgXvbPZXY"
          }
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </article>

      <article className="button-wrapper">
        <button className="submit-button" onClick={onAddresSubmit}>
          Submit
        </button>
      </article>
    </MapModalStyle>
  );
}

export default MapModel;
