import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text as Title } from '@rneui/themed'
import { colors } from '../style/base'

export const Slider = ({title}) => {
    const [product, setProduct] = useState({
        value:120,
        name:title
    });


  return (
      <View style={styles.sliderContainer}>
            <Icon type='' name='chevron-left' onPress={()=> setProduct({
                value: 100,
                name:'Lija 120'
            })}/>
            <View style={styles.sliderContent}>
                <Title h4={true} h4Style={{
                    fontSize: 14,
                    color: colors.grey
                }}>{product.name}</Title>
                <Title h4={true} h4Style={{
                    fontSize:14,
                    color:colors.black
                }}>RD$ {product.value}</Title>
                 <View style={styles.iconContainer}>
                    <Icon
                        type='antdesign' 
                        name='closecircleo'
                        color={colors.red}
                    /> 
                </View>
            </View>
            <Icon  
                name='chevron-right' 
                onPress={() => setProduct(
                    {
                        value: 200,
                        name:'Lija 150'
                    }
                    )
                }
            />
      </View>
  )
}

const styles = StyleSheet.create({
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
})