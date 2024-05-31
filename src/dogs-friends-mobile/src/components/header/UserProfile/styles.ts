import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    gap: 10,
    borderWidth:0.4,
    borderColor: "#BBB8B8",
    borderRadius: 10,
    paddingVertical:10,
    paddingHorizontal:5,

  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    
  },
  profileImgContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  profileImg: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  userName: {
    color: '#FFF',
  },
});
