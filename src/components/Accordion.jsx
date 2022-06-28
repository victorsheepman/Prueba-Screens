import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, ListItem, Text as Title } from '@rneui/themed';
import { colors } from '../style/base';

export const Accordion = (
    {
        title='Debolladura en la puerta',
        colorTitle=colors.grey,
        sizeTitle=20,
        typeIcon='antdesign',
        nameIcon='downcircleo',
        children
    }
) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <ListItem.Accordion 
        icon={<Icon type={typeIcon} name={nameIcon} />}
        isExpanded={expanded}
        onPress={() => {
            setExpanded(!expanded);
        }}
        content={
            <Title 
                h3={true}
                h3Style={{
                    fontSize:sizeTitle,
                    color:colorTitle,
                }}
            >
                {title}
            </Title>
        }
            >
                {children}
            </ListItem.Accordion>
  )
}

const styles = StyleSheet.create({})