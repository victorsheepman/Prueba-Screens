import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Card,  ListItem  } from "@rneui/themed";
import { ListItemAccordion } from '@rneui/base/dist/ListItem/ListItem.Accordion';
import { InputWhite } from '../atoms/InputWhite';
import { InputAccordion } from '../atoms/InputAccordion';
import { Input } from '@rneui/themed';
import { ContanerShadow } from './ContanerShadow';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';

export const AddAutoModal = ({handle}) => {
  return (
    <View style={styles.container}>
     
        <View style={styles.modalHeader}>
           <Card.Title>Agreagr Vehiculo</Card.Title>
           <Text style={styles.exit} onPress={handle}>X</Text>
        </View>
        <ScrollView>
        <InputAccordion title="Marca" type="Honda" /> 
        <InputAccordion title="Modelo" type="Civic" /> 
        <InputAccordion title="Año" type="2016" />
        <InputAccordion title="Asientos" type="2016" />
        <InputAccordion title="Puertas" type="5" />
        <InputAccordion title="Transmision" type="4WD" />   
        <InputAccordion title="Motor" type="2000, 4 cilindros" /> 
        <InputAccordion title="color interior" type="Negro" /> 
        <InputAccordion title="Color Exterior" type="Azul" /> 
        <InputAccordion title="Accesorios" type="Seleccionar" /> 
        
        <Input
          placeholder="Observaciones"
          //onChangeText={value => this.setState({ comment: value })} 
          style={styles.comment}
        />
        <InputAccordion title="Costo inicial" type="RSD$ 100,000.00" /> 
        <View style={styles.Picture}>
          <Text style={styles.Picturetitle}>Fotos del Vehiculo</Text>
          <ButtonComponent title="Agregar Fotos" textColor="white" background="black" margin={10}/>
        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        bottom: 0,
        right: 0,
        left: 0,
        flex: 1,
        backgroundColor: '#fff',
        //paddingTop:20,
        paddingHorizontal:10,
        paddingBottom:5,
        zIndex: 3,
    },
    comment:{
      width: 100,
      height: 250,
      borderColor:"black",
      borderWidth:1,
      borderRadius:5,
      marginTop:12,
      alignItems:"center"
  },
  Picture:{
    width: "100%",
    height: 100,
    paddingHorizontal:12,
    paddingTop:12,
    marginTop:12,
  },
  Picturetitle:{
    fontSize:20,
    fontWeight:"500",
  },
  modalHeader: {
    width:"100%",
    height: "auto",
    display: "flex",
    flexDirection:"row",
    justifyContent:"center"
  },
  exit:{
    position: "absolute",
    right: 3,
  }

})