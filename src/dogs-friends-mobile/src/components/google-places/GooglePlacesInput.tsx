import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const GooglePlacesInput = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Belo');
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      onFail={error => console.log(error)}
      query={{
        key: 'AIzaSyDYvbT3UubFSrzB6aRGduQcSIdO7dAJpVk',
        language: 'en',
      }}
      fetchDetails={true}
      styles={{listView:{height:500}}}
    />
  );
};