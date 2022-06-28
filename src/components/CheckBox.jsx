import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/themed'
import { colors } from '../style/base'

export const CheckBoxComponent = ({title="Pago quincenal", span='(4 cuotas de RD$ 420)', colorTitle}) => {
    const [check, setCheck] = useState(false)
  return (
    <View style={styles.checkbox}>
        <CheckBox
            center
            title={title}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={check}
            onPress={() => setCheck(!check)}
        />
        <Text style={
            {
                fontSize:14, 
                color:colors.grey
            }
        }>
            {span}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    checkbox:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems:'center',
        marginTop:2,
        paddingHorizontal:12,
    },
})