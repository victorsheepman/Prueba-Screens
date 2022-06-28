import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Text as Title, Icon, Input, Switch} from '@rneui/themed';
import { colors, fonts } from '../style/base';
import { AddPicture } from './AddPicture';
import { BoxPicture } from './BoxPicture';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const EspecirficarDanosModal  = () => {
    const [checked, setChecked] = useState(false);
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
   
        <View style={styles.children}> 
        <ScrollView>
                <View style={styles.childrenHeader}> 
                    <Image style={styles.logo} source={require("../assets/logo.png")}/>
                    <Title h4={true} h4Style={{fontSize:16}}>Especificar daños</Title>
                    <Icon 
                        type='antdesign' 
                        name='closecircleo' 
                        onPress={
                            ()=>setShow(false)
                        }
                    />
                </View>
                <Image style={{width:'100%', height:450, marginTop:12 }} 
                    source={require("../assets/damage.png")} 
                />
                <Text style={{color:colors.grey}}>Daños a reparar</Text>
                <Input
                    placeholder="Daños a reparar"
                    //onChangeText={value => this.setState({ comment: value })} 
                    style={styles.comment}
                />
                 <Text style={{color:colors.grey}}>Mensajes y luces de averia</Text>
                <Input
                    placeholder="Daños a reparar"
                    //onChangeText={value => this.setState({ comment: value })} 
                    style={styles.comment}
                />
                <View style={{
                    width:'100%',
                    height: 'auto',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Text style={{color:colors.grey, fontSize:fonts.md}}>Mostrar fotos del vehiculo en el reporte pdf</Text>
                    <Switch
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                        color={colors.green}
                    />
                    
                </View>
                <Image 
                    source={require('../assets/galery.png')} 
                    style={{
                        width: 380,
                        height: 1285
                    }}
                />
                <ButtonComponent
                    title='Continuar'
                    widthButton='100%'
                    background={colors.black}
                    textColor={colors.white}
                    margin={12}
                    handle={()=> navigator.navigate('PasoThree')}
                />
            </ScrollView>
        </View> 
      
    </View>
  )
}

export default EspecirficarDanosModal 

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
          paddingHorizontal: 6,
          paddingVertical:7
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
    box:{
        width: '100%',
        height: 'auto',
        backgroundColor:'#fffde8'
    },
    comment:{
        //width: 100,
        height: 150,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
    },
})