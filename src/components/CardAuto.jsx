import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { useState } from 'react'

export const CardAuto = ({recomendado=false}) => {
    const [like, setLike] = useState(false)
    if(recomendado){
        return(
            <View style={styles.containerXL}>
                <Image style={styles.figure} />
                <Text style={styles.priceXl}>
                    $14000
                </Text>
                <Text style={styles.recomendado}>
                    Recomendado
                </Text>
                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <Text>2017</Text>
                    <Text style={like ? {color:'red'} : {color:'black'}} onPress={()=>setLike(!like)}>Like</Text>
                    </View>
                    <Text style={styles.name}>Audi S4 limousine</Text>
                    <Text style={styles.type}>Automatico</Text>
                    <Text style={styles.caracteristicas}>Detalles</Text>
                </View>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <Image style={styles.figure} />
                <Text style={styles.price}>
                    $14000
                </Text>
                
                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <Text>2017</Text>
                       <Text style={like ? {color:'red'} : {color:'black'}} onPress={()=>setLike(!like)}>Like</Text>
                    </View>
                    <Text style={styles.name}>Audi S4 limousine</Text>
                    <Text style={styles.type}>Automatico</Text>
                    <Text style={styles.detalles}>Detalles</Text>
                </View>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
  
    container: {
        width:'40%',
        height: 220,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        position: "relative"
    },
    containerXL:{
        width:'100%',
        height: 220,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
    },
    figure:{
      width:'100%',
      height:140,
      backgroundColor:'red',
      borderRadius:20,
    },
    price: {
      width: 90,
      height:20,
      backgroundColor: '#78909c',
      borderRadius:20,
      position:'absolute',
      left: "20%",
      top:"57%",
      zIndex:2,
      paddingHorizontal:15,
    },
    priceXl: {
        width: 90,
        height:20,
        backgroundColor: '#78909c',
        borderRadius:20,
        position:'absolute',
        left: "37%",
        top:"57%",
        zIndex:2,
        paddingHorizontal:15,
    },
    recomendado:{
        width: 100,
        height:20,
        paddingLeft:5,
        backgroundColor: '#78909c',
        borderRadius:20,
        position: "absolute",
        top: 5,
        left: 4 ,
    },
    detalles:{
        width: 70,
        height:20,
        backgroundColor: '#c2ac4d',
        borderRadius:20,
        position:'absolute',
        left: 90,
        top:65,
        zIndex:2,
        color:"white" ,
        paddingHorizontal:8,
    },
    body:{
        width: '100%',
        height: 60,
        
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        paddingHorizontal:"2%"
    },
    bodyTop:{
        width: '100%',
        height: 'auto',
        //backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    name:{
        fontSize:16,
        color:"black",
        fontWeight:"500",
    },
    type:{
        fontSize:20,
        color:"#9c9d9d",
        fontWeight:"300",
    },
    caracteristicas:{
        width: 130,
        height:"auto" ,
        backgroundColor: "red",
        position: "absolute",
        right: 15,
        bottom: -12,
    }
}
)