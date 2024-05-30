import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import CustomMarker from './CustomMarker';

export default function Map({route, navigation}) {
  const { latlon, passeadorInfo } = route.params
  console.log(passeadorInfo)
  return (
    <View style={styles.container}>
    {
      latlon && passeadorInfo && (
       
        <MapView style={styles.map}
        initialRegion={{
          latitude:latlon.lat,
          longitude:latlon.lon,
          latitudeDelta: 0.1,
          longitudeDelta: 0.05
        }}
        >
        <CustomMarker
          latitude={latlon.lat}
          longitude={latlon.lon}
          color={"#0F9D58"}
          id={'1'}
          passeador={passeadorInfo}
        > 
  
        </CustomMarker>
        </MapView>
      
      )
        
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  map: {
    width: '100%',
    height: '100%',
  },
});
