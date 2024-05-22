import React, { useState } from 'react'
import { Animated, SafeAreaView, ScrollView, View } from 'react-native'
import { HeaderContainer } from './HeaderContainer'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends DrawerScreenProps<any, any>{
    children: any;
    search?: any;
}

export const HeaderAnimation = ({route, navigation, children, search}:Props) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#FFF'}}>
      <ScrollView
         showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent:{
              contentOffset: {y : scrollY}
            }
          }],
          { useNativeDriver: false}
          )}
      >
       
        <Animated.View style={
          [{
              height: scrollY.interpolate({
                inputRange: [20,200,250],
                outputRange:[125,10,0],
                extrapolate: 'clamp'
              }),
              opacity:scrollY.interpolate({
                inputRange: [1,1,120],
                outputRange: [1,1,0],
                extrapolate: 'clamp'
              })
            }
        ]}>
          <HeaderContainer route={route} navigation={navigation}> 
            { search }
          </HeaderContainer>      
        </Animated.View>
    
        <View>
            {children}
        </View>

      </ScrollView>
      </View>
    </SafeAreaView>
  )
}
