import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { Card, Text as Title } from '@rneui/themed'
import { colors, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { Factura } from '../../components/Factura'
import { Cronometro } from '../../components/Cronometro'
import { useNavigation } from '@react-navigation/native'
export const BilleteraScreen = () => {
    const navigator = useNavigation();
  return (
      <>
        <HeaderComponent iconLeft='align-justify' type='antdesign' />
        <BlackTitle title='Billetera' />
        <ScrollView>
        <View style={styles.container}>
            <View style={
                {
                    width: '100%',
                    height: 120,
                    alignItems:'center',
                    justifyContent:'center',
                    
                }
            }>
                <Title h4={true} h4Style={
                    {
                        fontSize:21
                    }
                }>
                    RD$ 28000
                </Title>
                <Text style={styles.parrafo}>
                    Ganancia Total
                </Text>
                <ButtonComponent 
                    background={colors.black} 
                    widthButton='50%' 
                    title={'Retirar Efectivo'}
                    textColor={colors.white} 
                    margin={12}
                    handle={()=>navigator.navigate('RetiroEfectivo')}
                />
            </View>
        </View>
        <BlackTitle title='Ganancias'  />
        
        <View style={styles.container}>
            <Cronometro />
            <View style={
                    {
                        width: '100%',
                        height: 100,
                        alignItems:'center',
                        justifyContent:'center',
                    }
            }>
                <Title h4={true} h4Style={
                    {
                        fontSize:21
                    }
                }>
                    RD$ 28000
                </Title>
                <Text style={styles.parrafo}>
                    Esta semana 
                </Text>
            </View>
            <Card.Divider style={{marginTop:padding.md}} />
            <Factura />
            <Factura 
                monto={300}
                placa='000034'
                id='202000001'
            />
            <Card.Divider style={{marginTop:padding.md}} />
            <ButtonComponent 
                widthButton="100%" 
                background={colors.gold} 
                textColor={colors.white} 
                title="Ver mas..." 
                margin={12}
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
        paddingHorizontal:20,
        paddingVertical:20
    },
    parrafo:{
        fontSize:15
    }
})