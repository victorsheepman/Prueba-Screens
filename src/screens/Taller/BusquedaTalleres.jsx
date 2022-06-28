import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon} from '@rneui/themed';
import { ButtonGroup } from '@rneui/base';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { colors } from '../../style/base';
import { TalleresCercano } from '../../components/TalleresCercano';
export const BusquedaTalleres = () => {
  return (
    <View style={styles.container}>
        <View style={styles.childrenHeader}> 
            <Icon type='font-awesome' name='chevron-left' />
            <Title h4={true} h4Style={{fontSize:16}}>Busqueda de talleres</Title>
            <Image style={styles.logo} source={require("../../assets/logo.png")}/>
        </View> 
       
        <Image
            source={require('../../assets/mapa.png')}    
            style={{
                width:410,
                height: 300
            }}
        />
         <Image
            source={require('../../assets/locale.png')}    
            style={{
                width:210,
                height: 100,
                position: 'absolute',
                top:73,

            }}
        />
         <Image
            source={require('../../assets/locale.png')}    
            style={{
                width:210,
                height: 100,
                position: 'absolute',
                top:172,
                left: 200

            }}
        />
        <Image
            source={require('../../assets/pick.png')}    
            style={{
                width:210,
                height: 210,
                position: 'absolute',
                top:90,
                left: 100

            }}
        />
        <View style={styles.containerB} >
            <ButtonComponent 
                background={colors.white}
                widthButton='60%'
                title={'+'}
            />
            <ButtonComponent 
                background={colors.white}
                widthButton='60%'
                title={'-'}
                margin={12}
            />
        </View>
        <View style={styles.footer}> 
        
            <Title 
                h3={true} 
                h3Style={
                    {
                        fontSize:18,
                        color:colors.gold
                    }
                } >Talleres mas cercanos
            </Title>
            <ScrollView>
            <TalleresCercano />
            <TalleresCercano /> 
            <TalleresCercano /> 
            </ScrollView>     
        </View>
        
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical:20
       
    },
    childrenHeader:{
        width: "100%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
    containerB:{
        width: 100,
        height: 200,
        position: 'absolute',
        bottom: 220,
        right: 0
    },
    footer:{
        width: '100%',
        height: '100%',
        backgroundColor:'white', 
        borderRadius:8, 
        alignItems:'center',
        paddingTop:12
    }
})