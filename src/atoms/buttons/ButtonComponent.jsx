import { Text, Pressable } from 'react-native'
import React from 'react'

export const ButtonComponent = ({title, textColor, widthButton, background, handle = null, margin=0}) => {
  return (
    <Pressable style={{
        width: widthButton,
        height: 45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:  background,
        borderRadius: 6,
        marginTop:margin,
      }
    }
    onPress={handle}
    
    >
        <Text style={{color: textColor}}>{title}</Text>
    </Pressable>
  )
}
