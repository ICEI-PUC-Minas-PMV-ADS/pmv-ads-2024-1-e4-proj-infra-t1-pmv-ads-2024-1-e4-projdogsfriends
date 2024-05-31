import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E52D0",
    height: 200,
    marginBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  content: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  search: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 400,
    zIndex: 1,
  },
  bgtexture: {
    zIndex: -1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
});
