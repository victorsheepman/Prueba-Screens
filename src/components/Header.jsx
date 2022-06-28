import { View,  StyleSheet, Pressable, Image } from 'react-native'
import { Header, Icon } from "@rneui/themed"
import React from 'react'
import { colors } from '../style/base'

export const HeaderComponent = ({iconLeft='', iconRight='', handle=null, type='font-awesome'}) => {
    return (
    <Header
      rightComponent={
        <View style={styles.headerRight}>
            <Pressable onPress={handle}>
              <Icon 
                type={type} 
                name={iconRight} 
                color={colors.black} 
              />
            </Pressable>
        </View>
      }
      leftComponent={{
          type:'font-awesome',
          icon:iconLeft,
        }}
      backgroundColor={colors.white} 
      style={styles.headerContainer}
      centerComponent={
        <Image style={styles.logo} source={require("../assets/logo.png")}/>
      }
    /> 
  )
}


const styles = StyleSheet.create({
    headerContainer:{
      width: '100%',
      height:20,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      paddingVertical: 15,
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 6,
      },
});
  
  

