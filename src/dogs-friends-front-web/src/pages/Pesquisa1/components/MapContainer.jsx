import { useEffect, useState } from 'react';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Map } from '../../../components/google-maps';

export const MapContainer = ({ clients, activeMarker, setActiveMarker,  }) => {
  const [geoClients, setGeoClients] = useState([]);

  useEffect(() => {
    const fetchGeoCoordinates = async () => {
      const geoClientsArray = [];
      for (const client of clients) {
       
        try {
          const results = await getGeocode({ address: client.enderecos[0].uf + ", " + client.enderecos[0].cidade  + ", " + client.enderecos[0].bairro + ", " + client.enderecos[0].logradouro   });
          const { lat, lng } = await getLatLng(results[0]);
          geoClientsArray.push({ lat, lng });
        } catch (error) {
          console.error("Erro nas coordenadas", client);
          
        }
      }
      setGeoClients(geoClientsArray);
    };

    fetchGeoCoordinates();
  }, [clients]);

   
  return (
    <Map geoClients={geoClients} clients={clients} activeMarker={activeMarker} setActiveMarker={setActiveMarker}/>
  );
};