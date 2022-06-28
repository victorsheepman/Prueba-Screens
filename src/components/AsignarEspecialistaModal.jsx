import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,  } from '@rneui/themed';
import { InputWhite } from '../atoms/InputWhite';
import { BlackTitle } from './BlackTitle';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { Especialista } from './Especialista';
import { Card } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
export const AsignarEspecialistaModal = ({setShow}) => {
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Asignar especialista</Title>
                <Icon 
                    type='antdesign' 
                    name='closecircleo'  
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <InputWhite 
                title='Tiempo de realizacion' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <BlackTitle
                title='Listado de especialistas'
                margin={10}
            />
            <InputWhite 
                title='Buscar Especialista' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={12} 
                border={1} 
            />
            <ButtonComponent
                title='Buscar'
                widthButton='100%'
                background={colors.gold}
                textColor={colors.white}
                margin={20}
            />
            <Card.Divider style={{marginTop:32}} />
            <View style={
                {
                    width: '100%',
                    height: 'auto',
                    alignItems:'center'
                }
            }>
                <Especialista />
                <Especialista />
                <Especialista />
            </View>
            <ButtonComponent
                title='Asignar especialista'
                widthButton='100%'
                background={colors.black}
                textColor={colors.white}
                margin={19}
               
            />
        </ScrollView>
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
        paddingHorizontal: 6,
        paddingVertical:24
    },
    children:{
        width: '100%',
        height: "auto",
        backgroundColor:'white',
        paddingHorizontal: 12,
        paddingVertical:6
    },
    childrenHeader:{
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
})