
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
    width: '100%',
    height: '80vh'
  };
  
  const center = {
    lat: -19.92317983503711,
    lng:-43.93707216224178
  };
 
  const options = {
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    streetViewControl: false
  }

  const pinIcon = {
    url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    scaledSize: { width: 50, height: 50}
  }
  
export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  function MarkerClicked(){
    console.log("Click")
    setIsInfoWindowOpen(true)
  }

  const [isInforWindowOpen, setIsInfoWindowOpen] = useState(false)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
       onClick={() => setIsInfoWindowOpen(false)}
      >
        {
          <MarkerF 
            position={{lat:-19.92317983503711, lng: -43.93707216224178}} 
            icon={pinIcon}
            visible
            cursor="pointer"
            draggable
            onClick={MarkerClicked}
            // label={{
            //   text: "Text label",
            //   className: "text-3xl text-center text-black bg-yellow-500"
            // }}
          >
            
            {
              isInforWindowOpen && 
              (
                <InfoWindowF
                onCloseClick={() => setIsInfoWindowOpen(false)}
                position={{lat:-19.92317983503711, lng: -43.93707216224178}}>
                <div>
                <div className="flex items-center">
                    <img className="w-14 h-14 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      <div>
                        <h3>Some Title</h3>
                        <p>Some Description</p>
                      </div>
                 
                  </div>
                  <p>Lorem impsum</p>
                </div>
                </InfoWindowF>
              )

            }
           

          </MarkerF>

          
        /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}