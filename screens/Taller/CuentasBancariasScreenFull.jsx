import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { fonts,colors } from '../../style/base'
import { Text as Title, Switch } from '@rneui/themed';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { HeaderComponent } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export const CuentasBancariasScreenFull = () => {
    const [value, setValue] = useState(false)
    const navigator = useNavigation();
  return (
    <>
        <HeaderComponent 
            iconLeft='chevron-left' 
            type='font-awesome' 
        />
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.cuentaContainer}>
                    <View style={
                        {
                            width:18, 
                            height:18,
                            borderRadius:9, 
                            backgroundColor:"green"
                        }
                    }></View>
                    <Title 
                        h4={true}
                        h4Style={styles.CuentaTitle}
                    >1234567</Title>
                    <Image style={styles.bancoLogo} source={require('../../assets/banco.png')} />
            </View>
            <View style={styles.cuentaContainer}>
                <View style={styles.cuentaBody}>
                    <Title 
                        h4={true}
                        h4Style={styles.CuentaTitle}
                    >
                        1234567
                    </Title>
                    <Title 
                        h4={true}
                        h4Style={{
                            fontSize:16,
                            marginLeft:9,
                            color: "green"
                        }}
                    >
                        BHD
                    </Title>
                </View>
                <View style={styles.cuentaBody_bottom}>
                    <Switch
                        color="green"
                        value={value}
                        onValueChange={() => setValue(!value)}
                    />
                    <Title  
                        h4={true}
                        h4Style={styles.CuentaTitle}
                    >Seleccionar esta cuenta</Title>
                     <Title 
                        h4={true}
                        h4Style={{
                            fontSize:16,
                            marginLeft:70,
                            color: colors.red,
                        }}
                    >
                        Eliminar
                    </Title>
                </View>
                
            </View>
            <ButtonComponent 
                widthButton="100%" 
                background={colors.gold} 
                textColor={colors.white} 
                title="Registrar una nueva cuenta" 
                margin={"100%"}
                handle={()=>navigator.navigate('Billetera')}
            />
        </View>
        </ScrollView>
    </>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingVertical:13,
        paddingHorizontal:13
      },
      header:{
          width: "100%",
          height:40,
          justifyContent:"center",
          alignItems:"center",
          borderBottomWidth:1
      },
      cuentaContainer:{
          width: "100%",
          height: "auto",
          borderWidth:1, 
          display: "flex",
          flexDirection:"row",
          paddingVertical:5,
          paddingHorizontal:5,
          alignItems:"center",
          marginTop:17,
          borderRadius:8,
          flexWrap:"wrap"
      },
      bancoLogo:{
          width: 30,
          height: 30,
          backgroundColor: "red",
          marginLeft:"67%"
      },
      cuentaBody:{
          width:"100%", 
          height:"auto", 
          flexDirection:"row",
          justifyContent:"space-between"
      },
      cuentaBody_bottom:{
          width:"100%", 
          height:"auto", 
          flexDirection:"row",
          alignItems:"center"
      },
      CuentaTitle:{
          fontSize:16,
          marginLeft:9
      }
})