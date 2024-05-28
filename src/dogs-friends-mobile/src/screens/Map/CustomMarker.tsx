import { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

function CustomMarker(
  {
    id,
    latitude,
    longitude,
    color
  }) {

  return (
    <Marker
      identifier={id}
      key={id}
      //Definindo as coordenadas do marcador
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      /* 
        Permite que os marcadores personalizados monitorem alterações visuais e sejam redesenhados,
        para obter maior performance é recomendado deixar a propriedade desativada
      */
      tracksViewChanges={false}
      
    >
      {/* Adicionando uma cor personalizada de acordo com as props */}
      <View style={styles.markerWrapper}>
        {/* Adicionando uma cor personalizada de acordo com as props */}
        <View style={[
          styles.markerBody,
          {
            backgroundColor: color || "#4285F4", //Caso nenhuma cor seja passada via props, o marcador será exibido na cor azul
          },
        ]}>
          <View style={styles.markerDot}></View>
        </View>
        <View style={[
          styles.markerArrow,
          {
            borderBottomColor: color || "#4285F4",
          }
        ]}>
        </View>
      </View>
      {/* Caso queira customizar totalmente a aparência de um Callout através de seus filhos, atribua à ele a propriedade tooltip=true */}
      <View style={styles.calloutContainer}>        
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"}} 
                    style={{width: 70, height: 70, borderRadius:50}} />
          <Text style={styles.title}>Nome Pessador</Text>
          <Text>Cidade: Belo horizonte</Text>
        
        
     </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  calloutContainer: {
    width: 180,
    padding: 5,
  
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  markerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  markerBody: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  markerDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: "180deg" }],
    marginTop: -10,
  },
  callout: {
    width: 250,
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5
  }

});

/* As props de nosso componente não sofrerão alteração durante o tempo de execução, 
então utilizaremos o React.memo para evitar renderizações desnecessárias */
export default CustomMarker = React.memo(CustomMarker);