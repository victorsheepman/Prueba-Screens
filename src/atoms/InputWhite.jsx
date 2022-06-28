import { TextInput } from 'react-native'
import React from 'react'

export const InputWhite = ({title = "hola", inputWidth="40%", margin=0, radius=0, inputHeight=40, border=2}) => (
    <TextInput style={{
        width: inputWidth,
        height: inputHeight,
        backgroundColor: 'white',
        borderColor:"black",
        borderWidth:border,
        paddingLeft:12,
        marginTop:margin,
        borderRadius:radius
        
    }} placeholder={title} placeholderTextColor="black"  />
)