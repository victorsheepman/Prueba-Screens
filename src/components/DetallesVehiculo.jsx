import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from './Header'
import { BlackTitle } from './BlackTitle'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import { Card, Icon } from '@rneui/themed'
import { colors } from '../style/base'
import { SelectAccordion } from './SelectAccordion'
import { ButtonComponent } from '../atoms/buttons/ButtonComponent'
import { Text as Title} from '@rneui/themed'
import { Plato } from './Plato'
import { Slider } from './Slider'
import { useNavigation } from '@react-navigation/native'

export const DetallesVehiculo = () => {
    const navigator = useNavigation();
    
  return (
    <>
    <HeaderComponent iconLeft='chevron-left' />
    <BlackTitle title='Detalle Vehiculo' />
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                    <Image
                        style={styles.item}
                        source={require('../assets/car.png')}
                    />
                    <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Marca: Honda'},
                                {key: 'Modelo: Civic'},
                                {key: 'Año: 2016'},
                                {key: 'Color: Negro'},
                                {key: 'Tipo de vehiculo: Sedan'},
                                {key: 'Combustible: Gasolina'},
                                {key: 'Transmicion: Automatica'},
                                {key: '# Asintos: 5'},
                                {key: 'Dueño: victor Marquez'},    
                            ]}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                        />
                    </View>
                    <Card.Divider />
                    <View style={styles.iconContainer}>
                        <Icon
                            type='antdesign' 
                            name='right'
                            color={colors.gold}
                        /> 
                    </View>
            
                </View>
        </View>
        <BlackTitle title='Servicios a realizar' />
        <View style={styles.container}>
        <SelectAccordion title='Lavado Exterior'>
                <View style={styles.selectContent}>
                    <Text>Estado: Completado</Text>
                    <ButtonComponent
                        title='Ver fotos'
                        widthButton='100%'
                        background={colors.gold}
                        textColor={colors.white}
                        margin={12}
                    />
                </View>
                
        </SelectAccordion>
        <SelectAccordion title='Lavado Interior'>
                <View style={styles.selectContent}>
                    <Text>Estado: Completado</Text>
                    <ButtonComponent
                        title='Ver fotos'
                        widthButton='100%'
                        background={colors.gold}
                        textColor={colors.white}
                        margin={12}
                    />
                </View>
                
        </SelectAccordion>
        <SelectAccordion title='Brillado'>
                <View style={styles.selectContent}>
                    <Text>Estado: Completado</Text>
                    <ButtonComponent
                        title='Ver fotos'
                        widthButton='100%'
                        background={colors.gold}
                        textColor={colors.white}
                        margin={12}
                    />
                </View>
                
        </SelectAccordion>
        </View>
        <BlackTitle title='Menu' />
        <View style={styles.container}>
            <Title h4={true} h4Style={{
                fontSize:18
            }}>Platos y Productos</Title>
            <Plato />
            <Plato />
            <Plato />
            <Plato />
            <Plato />
            <Title h3={true} h3Style={{fontSize:18, marginTop:21}}>
                Cuenta aperturadas
            </Title>
            <FlatList
                data={[
                    {key: 'SubTotal: RD$ 700.00,00'},
                    {key: 'Itbs:RD$ 460.00'},
                                    
                ]}
                renderItem={({item}) => <Text style={{color:colors.grey}}>{item.key}</Text>}
            />
           <View style={styles.sliderContainer}>
            <Icon type='' name='chevron-left' />
            <View style={styles.sliderContent}>
                <Title h4={true} h4Style={{
                    fontSize: 18,
                    color: colors.grey
                }}>2 x Presidente</Title>
                <Title h4={true} h4Style={{
                    fontSize:14,
                    color:colors.black
                }}>RD$ 123</Title>
            </View>
            <Icon  
                name='chevron-right' 
            />
      </View> 
      <View style={styles.input}>
                <Title 
                    h3={true} 
                    h3Style={
                        {
                            fontSize:17, 
                            marginTop:12
                        }
                    }>RD$1,680.00</Title>
                <ButtonComponent 
                    widthButton={"58%"} 
                    title="Pagar Ahora" 
                    background={colors.black} 
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('RealizarReservacion')
                    }
                />
        </View>

        </View>
        </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        position: 'relative',
        marginTop:12,
    },
    item:{
        width: 60,
        height: 60,
        backgroundColor:"red",
        marginRight:9
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    },
    sliderContainer:{
        width: '100%',
        height: 100,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    sliderContent:{
        width: '80%',
        height: 55,
        paddingHorizontal:12,
        paddingVertical:10,                             
        //backgroundColor:'green'
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    }, 
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:12,
        paddingHorizontal:12,
    }, 
})