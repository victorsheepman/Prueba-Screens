import { StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import { Text as Title, Switch } from '@rneui/themed';
import { colors } from '../style/base';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
export const AddPicture = ({title, buttonTitle, check=true, titleSize=16, marginButton=12, children, handle=''}) => {
    const [checked, setChecked] = useState(false);
if(check){
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
            <Title h4={true} h4Style={{fontSize:16}}>{title}</Title>
            <Switch
                value={checked}
                onValueChange={(value) => setChecked(value)}
                color={colors.green}
            />
        </View>
        <ButtonComponent background={colors.black} widthButton='100%' title={buttonTitle} textColor={colors.white} handle={handle} />
      </View>
    )
}else{
    return (
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
              <Title 
                h4={true} 
                h4Style={
                    {fontSize:titleSize}
                }>
                    {title}
                </Title>
                {children}
          </View>
          <ButtonComponent 
            background={colors.black} 
            widthButton='100%' 
            title={buttonTitle} 
            textColor={colors.white} 
            margin={marginButton} 
            handle={handle}
        />
        </View>
      )
}
  
}


const styles = StyleSheet.create({
    wrapper:{
        width: "100%",
        height: 120,
        paddingHorizontal:10,
        paddingVertical:7,
        borderWidth:1, 
        marginTop:12
    }, 
    titleWrapper:{
        width: '100%',
        height: 'auto',
        //backgroundColor:"green", 
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-between"
    }
    
})