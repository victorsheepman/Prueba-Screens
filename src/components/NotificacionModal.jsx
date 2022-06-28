import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { Text as Title, Icon} from '@rneui/themed';
import { colors } from '../style/base';
import { InputWhite } from '../atoms/InputWhite';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/core';

export const NotificacionModal = ({setShow}) => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <View style={styles.childrenHeader}> 
                    <Image 
                        style={styles.logo} 
                        source={require("../assets/logo.png")}
                    />
                    <Title 
                        h4={true} 
                        h4Style={{fontSize:16, marginLeft:"10%"}}
                    >Notificacion</Title>
                    <Icon 
                        type='antdesign' 
                        name='closecircleo' 
                        style={{marginLeft:'60%'}}
                        onPress={
                            ()=>setShow(false )
                        } 
                    />
                    
            </View>
            <Text style={styles.textBody}>Taller chelo realizara la instalacion de"1 motor de arranque" que Seguros Reservas te ha comprado</Text>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Title h4={true} h4Style={{fontSize:17}}>Lugar de entrega</Title>
                    <Title h4={true} h4Style={{fontSize:15, color:colors.grey}}>Taller chelo</Title>
                </View>
                <View style={styles.cardHeader}>
                    <Icon type='font-awesome' name='map-marker' />
                    <Title h4={true} h4Style={{fontSize:14, color:colors.grey}}>Av San vicente de paul, esq. Carretera mella, Santo Dominfo este, R.D</Title>
                </View>
                <View style={styles.cardBody}>
                    <Icon type='font-awesome' name='phone' />
                    <Title h4={true} h4Style={{fontSize:14, color:colors.grey, marginLeft:14}}>809-000-0000</Title>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Title h4={true} h4Style={{fontSize:17}}>Pieza a entregar</Title>
                    <Title h4={true} h4Style={{fontSize:15, color:colors.black}}>Pieza: #0003</Title>
                </View>
                <View style={styles.cardList}>
                    <Image
                        style={styles.itemtwo}
                        source={require('../assets/pieza.png')}
                    />
                    <View style={styles.list}>
                        <FlatList
                            data={[
                            {key: 'Articulo: 1 motor de arranque'},
                            {key: 'Marca: Honda'},
                            {key: 'Modelo: Civic'},
                            {key: 'Año: 2006'}, 
                            {key: 'Tipo de motor: 2 tiempos'},
                            ]}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                        />
                    </View>
                </View>
            </View>
            <InputWhite 
                title='Tiempo de entrega' 
                inputWidth='100%' 
                inputHeight={50} 
                radius={5} 
                margin={12}
            />
            <ButtonComponent 
                widthButton='100%'
                background={colors.gold}
                textColor={colors.white}
                title='Aceptar'
                margin={50}
                handle={()=>navigator.navigate('PiezasRecibidas')}

            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex: 2,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 12,
        paddingVertical:52,
    },
    children:{
        width: '100%',
        height: 'auto',
        //borderRadius: 15,
        backgroundColor:'white',
        paddingHorizontal:5,
        paddingVertical:8
    },
    childrenHeader:{
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
    textBody:{
        paddingHorizontal:31,
        //textAlign:'center',
        marginTop:12, 
        fontSize:16
    },
    card:{
        width:'100%',
        height: 'auto',
        paddingHorizontal:6,
        paddingVertical:6,
        //backgroundColor:"green"
    },
    cardHeader:{
        width: "100%",
        height: 'auto',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        marginTop:9
    },
    cardBody:{
        width: "100%",
        height: 'auto',
        flexDirection:"row",
        alignItems:"center",
        //justifyContent:'space-between',
        marginTop:9
    },
    cardList:{
        width:"100%",
        height: "auto",
        //backgroundColor:"blue",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:15,
        paddingLeft:12,
    
    },
    itemtwo:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:15,
        borderWidth:1
    },
})