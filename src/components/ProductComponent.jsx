import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import { Image } from 'react-native'
import { Text as Title, Icon} from '@rneui/themed';
import { colors, fonts } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';

const ProductComponent = ({title='MANNOL Plus aceite de motor', nro=12232, prov='Respuesto varon',children}) => {
    const [first, setfirst] = useState(1)
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            {children}
            <View style={styles.box}>
                <Title h3={true} h3Style={{
                    fontSize:fonts.md
                }}>{title}</Title>
                <Text>Numero de Articulo: {nro} </Text>
                <Text>{prov}</Text>
                <Text style={{
                    marginTop:21,
                    color: colors.gold, fontSize:16
                }}>
                    Precio dado por el provedor
                </Text>
            </View>
        </View>
       <View style={{
            width: '100%',
            height: 'auto',
            flexDirection:'row',
            justifyContent:'space-between', 
            alignItems:'flex-end',
       }}> 
        <ButtonComponent
            title='Detalles'
                    widthButton='28%'
                    background={colors.black}
                    textColor={colors.white}
                    margin={12}
        />
        <ButtonComponent
            title={first}
            widthButton='28%'
            background={colors.white}
            textColor={colors.black}
            margin={12}
            handle={()=>setfirst(first +1)}

        />
        <Pressable style={styles.search}>
                <Icon type='font-awesome' name='shopping-cart'color={colors.white} />
        </Pressable>

       </View>
    </View>
  )
}

export default ProductComponent

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 'auto',
        marginTop:20
    }, 
    top:{
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        marginTop:12, 
        justifyContent:'space-around'

    },
    box:{
        width: 'auto',
        height:'auto'
    },
    search:{
        width: 40,
        height: 40,
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#bea741'
    },
})