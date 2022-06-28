import {TextInput } from 'react-native'
import React from 'react'

export const InputCustom = ({background, widthButton, radius, border= 'none'}) => (
    <TextInput style={{
        width: widthButton,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:  background,
        borderRadius: radius,
        borderColor:border,
    }} />
)
