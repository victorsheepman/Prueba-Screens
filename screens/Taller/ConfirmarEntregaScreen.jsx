import { StyleSheet, Text, View,Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { BlackTitle } from '../../components/BlackTitle'
import { HeaderComponent } from '../../components/Header'
import { Text as Title} from '@rneui/themed';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { colors } from '../../style/base';
import { useNavigation } from '@react-navigation/core';


export const ConfirmarEntregaScreen = () => {
    const navigator = useNavigation();
  return (
    <>
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Confirmar entrega' />
        <ScrollView>
        <View style={styles.container}>
            
            <View style={styles.card}>
                <Image
                    style={styles.itemtwo}
                    source={require('../../assets/pieza.png')}
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                            {key: 'Numero de referencia:#00026'},
                            {key: 'Pieza: Motor de arranque'},
                            {key: 'Marca: Honda'},
                            {key: 'Modelo: Civic'},  
                            {key: 'Tipo de motor: 2T'},
                            {key: 'Año: 2006'},
                            {key: 'Estado: Nuevo'},
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
               
            </View>
            <Title h3={true} h3Style={{fontSize:16, marginTop:21, }}>Metodo de pago</Title>
            <View style={styles.boxYellow}>
                <Text style={styles.parrafo}>
                    Con su firmeza autoriza ser el responsable de esta pieza
                    y que los datos mostrados arriba corresponden a lo que esta recibiendo.

                </Text>
            </View>
            <Image source={require('../../assets/firma.png')} 
                style={{
                    width: '100%',
                    height: 200,
                    marginTop:20
                }}
            />
            <ButtonComponent
                title='Confirmar entrega'
                widthButton='100%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
                handle={
                    ()=>navigator.navigate('InstalacionProceso')
                }
            />
            
        </View>  
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'flex-end',
        paddingHorizontal:20,
        paddingVertical:20
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
    itemtwo:{
        width: 60,
        height: 60,
        //backgroundColor:"red",
        marginRight:15, 
        borderWidth:1,
        borderColor:"grey",
        borderRadius:3
    },
    boxYellow:{
        width:'100%',
        height: '12%',
        backgroundColor:'#e8a84b',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:12,
        paddingRight:2,
        paddingVertical:4,
        marginTop:21
    },
    parrafo:{
        fontSize:15,
        fontWeight:'500'
    },
    duda:{
        width:'100%',
        height: 250,
        marginTop:12,
        backgroundColor:'yellow'
    }
})