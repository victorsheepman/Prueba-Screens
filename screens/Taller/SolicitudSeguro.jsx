import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { colors, fonts, padding } from '../../style/base'
import { ContanerShadow } from '../../components/ContanerShadow'
import { Text as Title, Card } from "@rneui/themed";
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { SolicitudModal } from '../../components/SolicitudModal'

export const SolicitudSeguro = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <HeaderComponent iconLeft='chevron-left' />
    <BlackTitle title='Solicitud de seguros' />
    <View style={styles.container}>
        <ContanerShadow title=''>
            <View style={styles.titles}>
                <Title h4={true} h4Style={{fontSize:fonts.md}}>Seguros reserva</Title>
                <Title style={{color:colors.grey, fontSize:fonts.md}}>(hace25 minutos)</Title>
            </View>
        <View style={styles.card}>
            <Image
                style={styles.item}
                source={require('../../assets/pieza.png')}
            />
            <View style={styles.list}>
                <FlatList
                    data={[
                    {key: 'Tipo de servicio: instalacion de pieza'},
                    {key: 'numero de cotizacion: 00000123'},
                    {key: 'Marca: Honda'},
                    {key: 'Modelo: Civic'},
                    {key: 'Tipo de motor: 17'},
                    {key: 'Año: 2006'},
                    {key: 'Combustible: ver descripcion'},
                    {key: 'Transmicion: ver pieza'},    
                    ]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                />
            </View>
      </View>
            <ButtonComponent 
              widthButton={"100%"} 
              background={colors.gold} 
              title="Hacer una oferta" 
              textColor={colors.white}
              margin={12} 
              handle={()=>setShow(true)} 
            />
        </ContanerShadow>
      <Card.Divider color={"blue"} style={{marginTop: padding.md, width:"90%", marginLeft:padding.md}} />
    </View>
    {
      show && <SolicitudModal setShow={setShow}/>
    }
    </>
    
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       // alignItems: 'center',
        //justifyContent: 'center',
    },
    titles:{
        width: "100%",
        height: "auto",
        flexDirection:"row",
        justifyContent:"space-between",
       // backgroundColor:"black"
    },
    list:{
      marginLeft:12,
      //marginTop:2,
    },
    listItem:{
      fontSize:13,
      fontWeight:"500",
      marginTop:5,
    },
    buttons:{
      width: "100%",
      height:"auto",
      marginTop:20,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red"
    }, 
    card:{
        width:"100%",
        height: "auto",
        //backgroundColor:"blue",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:15,
        paddingLeft:12,
    
    },
})