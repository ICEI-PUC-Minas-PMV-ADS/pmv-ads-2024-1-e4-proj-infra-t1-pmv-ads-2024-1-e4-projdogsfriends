import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import CustomMarker from './CustomMarker';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude:-19.865469804541277,
        longitude:-43.96937656452241,
        latitudeDelta: 0.1,
        longitudeDelta: 0.05
      }}
      >
      <CustomMarker
        latitude={-19.865469804541277}
        longitude={-43.96937656452241}
        color={"#0F9D58"}
        id={'1'}
      > 

      </CustomMarker>
      </MapView>
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
