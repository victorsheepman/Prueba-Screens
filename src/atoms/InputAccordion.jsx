import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItemAccordion } from '@rneui/base/dist/ListItem/ListItem.Accordion'

export const InputAccordion = ({title, type}) => {
  return (
    <ListItemAccordion content={
        <View style={styles.text}>
          <Text >{title}</Text>
          <Text>{type}</Text>
        </View>          
      } containerStyle={styles.acconding}/>
  )
}
const styles = StyleSheet.create({
    text:{
        flex: 1,
        flexDirection:"row",
        height: "auto",
        alignItems:"center",
        justifyContent:"space-between"
    },
    acconding:{
        width: "100%",
        height: 50,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    }
})