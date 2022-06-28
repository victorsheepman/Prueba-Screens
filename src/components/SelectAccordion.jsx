import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../style/base';
import { CheckBox, Icon, ListItem, Text as Title } from '@rneui/themed';

export const SelectAccordion = ({children,  title='Debolladura en la puerta',}) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
        <CheckBox 
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={expanded}
            onPress={() => setExpanded(!expanded)}
        />
      <ListItem.Accordion 
        icon={<Icon type='antdesign' name='downcircleo' />}
        isExpanded={expanded}
        content={
            <Title 
                h3={true}
                h3Style={{
                    width: 230,
                    fontSize:20,
                    color:colors.grey,
                }}
            >
                {title}
            </Title>
        }
            >
                {children}
            </ListItem.Accordion>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "auto",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:"row",
        //paddingHorizontal:15,
        paddingVertical:15,
        flexWrap:"wrap"
    },

})