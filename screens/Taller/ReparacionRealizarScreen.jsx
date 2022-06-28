import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Icon, Text as Title} from '@rneui/themed'
import { colors, padding } from '../../style/base'
import { SelectAccordion } from '../../components/SelectAccordion'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'

export const ReparacionRealizarScreen = () => {
  return (
      <>
        <HeaderComponent iconLeft='align-justify' type='antdesign' iconRight='pluscircleo' />
        <BlackTitle title='Vehiculos Reparacion' />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={require('../../assets/carro.png')}
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
                <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='right'
                        color={colors.gold}
                    /> 
                </View>
            </View>
            <View style={styles.contentDate}>
                <Title h4={true} h4Style={{marginBottom:padding.sm}}>Fecha entrega</Title>
                <Text>Lunes 30 de julio, 2021</Text>
                <View style={styles.iconContainer}>
                    <Icon
                        type='font-awesome' 
                        name='calendar'
                        color={colors.gold}
                    /> 
                </View>
            </View>
        </View>
        <BlackTitle title='Reparacion a realizar' />
        <View style={styles.container} >
            <SelectAccordion>
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
            <SelectAccordion title='Pintura Completa'>
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
            <SelectAccordion title='Arreglo del radiador'>
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
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    contentDate:{
        width: '100%',
        height: 'auto',
        marginTop: 12,
        marginBottom:12
    },
    selectContent:{
        width: 350,
        height: 'auto',
        //sbackgroundColor:"green",
        marginLeft:16

    }
})