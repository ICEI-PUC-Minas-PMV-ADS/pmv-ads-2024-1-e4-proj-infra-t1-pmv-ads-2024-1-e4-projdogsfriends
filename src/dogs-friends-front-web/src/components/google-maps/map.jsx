
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import React, { useState } from "react";
import { Stars } from "../stars/stars";

const containerStyle = {
  width: '100%',
  height: '100%'
};


const options = {
  mapTypeControl: false,
  zoomControl: true,
  fullscreenControl: false,
  clickableIcons: false,
  streetViewControl: false,
}

const pinIcon = {
  url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  scaledSize: { width: 50, height: 50}
}

export default function Map({
    clients,
    geoClients, 
    activeMarker, 
    setActiveMarker, 
  }) {

  
  const [zoomMap, setZoomMap] = useState(13)
  const [isInforWindowOpen, setIsInfoWindowOpen] = useState(true) 
 
  const infoMarker = (latlng, client) => {
    if(!latlng || !client) return;
    return(
      <InfoWindowF
                
                onCloseClick={() => setIsInfoWindowOpen(false)}
                position={latlng}>
                <div>
                <div className="flex flex-col">
                    <img className="w-32 h-32 object-cover rounded"
                    src={`${client.fotoPerfil}`} />
                      <div className=" items-start">
                        <h3 className="text-sm font-semibold text-zinc-700">{ client.nome } {client.sobrenome}</h3>
                        <p>Apaixonado por cães</p>
                      </div>
                 
                  </div>
                    <Stars number={5}/>
                </div>
                </InfoWindowF>
    )
  }

  const center = geoClients[0] || {lat: -19.92602331744571, lng: -43.934125605629596}
 
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {    
    // const bounds = new window.google.maps.LatLngBounds(center);     
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  function MarkerClicked(markerId){
  
    setActiveMarker(markerId)
    setIsInfoWindowOpen(true)
  }


  return isLoaded ? (
      <GoogleMap
        mapTypeId="402c2f66b411dfcd"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomMap}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
        onClick={() => setIsInfoWindowOpen(false)}
        className="fixed h-[350px] w-full top-0"
      >
        {

            geoClients.map((latlng, i) => (
              <MarkerF 
                key={i}
                position={latlng} 
                icon={pinIcon}
                visible
                cursor="pointer"
                //draggable
                onClick={() => MarkerClicked(i)}
               
            >
            {
              isInforWindowOpen && activeMarker === i &&
              (
                infoMarker(latlng, clients[i])
              )

            }
           
              </MarkerF>
            ))

         
            
   

          // </MarkerF>

          
        /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>

}