import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Text as Title, Icon} from '@rneui/themed';
import { colors } from '../../style/base';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { Cronometro } from '../../components/Cronometro';
import { useNavigation } from '@react-navigation/native';

const InstalacionProcesoScreen = () => {
    const navigator = useNavigation();
  return (
    <>  
        <HeaderComponent iconLeft='chevron-left' />
        <BlackTitle title='Instalacion en proceso' />
        <ScrollView>
        <View style={styles.container}>
            <Cronometro />
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
                        source={require('../../assets/pieza.png')}
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
            <ButtonComponent 
                widthButton={"100%"} 
                background={colors.gold} 
                title="Realizar Validacion" 
                textColor={colors.white} 
                margin={'40%'} 
                handle={()=>navigator.navigate('CalificarTaller')}
            />
        </View>
        </ScrollView>
    </>
  )
}

export default InstalacionProcesoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
    },
    duda:{
        width:'100%',
        height: 250,
        marginTop:12,
        backgroundColor:'yellow'
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