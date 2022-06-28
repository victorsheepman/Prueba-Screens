import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Text as Title, Icon, Input,Card  } from '@rneui/themed';
import { Image } from 'react-native';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { colors } from '../style/base';
import { InputAccordion } from '../atoms/InputAccordion';
import { Switch } from 'react-native';
import { InputWhite } from '../atoms/InputWhite';
import { AddPicture } from './AddPicture';
import { useNavigation } from '@react-navigation/native';
export const TengoEsteArticuloModal = () => {
    const [checked, setChecked] = useState(false);
    const navigator = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.children}>
            <ScrollView>
            <View style={styles.childrenHeader}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Title h4={true} h4Style={{fontSize:16}}>Tengo este articulo</Title>
                <Icon
                    type='antdesign' 
                    name='closecircleo' 
                    onPress={
                        ()=>setShow(false)
                    }
                />
            </View>
            <View style={styles.card}>
                <Image
                    style={styles.item}
                    source={
                        require('../assets/motor.png')
                    }
                />
                <View style={styles.list}>
                    <FlatList
                        data={[
                            {key: 'Cantidad ordenada: 1'},
                            {key: 'Marca: Honda'},
                            {key: 'Modelo: Civic'},
                            {key: 'Año: 2016'},
                            {key: 'Tipo de motor: no especificado'},
                            {key: 'Descripcion: Ver mas'},   
                        ]}
                        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                    />
                </View>
                
            </View>
            <Card.Divider />
            <InputAccordion title='Estado de articulo' />
            <InputAccordion title='Estado de articulo' />
            <InputAccordion title='Cantidad disponible' />
            <InputAccordion title='Precio Ud' />
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Title h4={true} h4Style={{fontSize:16}}>¿Requerimiento inicial?</Title>
                    <Switch
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                        color={colors.green}
                    />
                </View>
                <InputWhite 
                    title='Monto Inicial:' 
                    inputWidth='100%' 
                    inputHeight={50} 
                    margin={12} 
                    border={1} 
                    radius={6} 
                />
            </View>
            <InputAccordion title='Fecha de entrega' />
            <Input
                placeholder="Enviar una nota"
                //onChangeText={value => this.setState({ comment: value })} 
                style={styles.comment}
            />
            <AddPicture 
                title={'Anexar'} 
                buttonTitle='Enviar' 
                check={false} 
                handle={()=>navigator.navigate('ListaDeseosScreen')}
            >
                <Button title='Seleccionar archivo' color={colors.grey}  />
            </AddPicture>
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
    comment:{
        //width: 100,
        height: 250,
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        marginTop:12,
        alignItems:"center"
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
        marginTop:12
    },
    iconContainer:{
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        top: 18,
        right: 2,        
    },
    item:{
        width: 60,
        height: 60,
      //  backgroundColor:"red",
        marginRight:9
    },
    wrapper:{
        width: "100%",
        height: 120,
        paddingHorizontal:10,
        paddingVertical:7,
       // borderWidth:1, 
        marginTop:12
    }, 
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-between"
    },
})