
import { getGeocode, getLatLng } from "use-places-autocomplete"

export const useGeocode = (clients) => {
 
 
let geoClients = []
let address = ""
clients.map(async(client) => {
    address = "MG" + ", " + "SAVASSI"  + ", " + "Belo Horizonte" 
   // address = client.enderecos[0].logradouro + ", " + client.enderecos[0].bairro  + ", " + client.enderecos[0].cidade 
    await getLatLong(address)
})
  async function getLatLong(addr){

   let geo = await getGeocode({ address:addr }).then((results) => {
        const { lat, lng } =  getLatLng(results[0]);           
        return {lat, lng}    
        });

   geoClients.push(geo) 

  }  
  

  return {
    geoClients
  }
}
