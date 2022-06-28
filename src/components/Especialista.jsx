import {TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import { Avatar, ListItem, CheckBox, Text } from '@rneui/themed'
import { colors } from '../style/base'

export const Especialista = ({title='Pranshu Chittora', subtitle='React Native Elements', isCheck=true}) => {
    const [check, setCheck] = useState(false);
    if(isCheck){
        return (
                <ListItem
                    Component={TouchableHighlight}
                    containerStyle={{}}
                    pad={20}
                    style={{width:'90%'}}
                >
                    <Avatar
                        source={{
                        uri:
                            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>
                        <Text 
                            h3Style={
                                {
                                    color:colors.black,
                                    fontSize:18   
                                }
                            
                            }
                            h3={true}
                        
                        >{title}</Text>
                        </ListItem.Title>
                        <ListItem.Subtitle>
                        <Text

                            style={
                                {
                                    color:colors.grey,
                                    fontSize:15
                                }
                            }
                        
                        >{subtitle}</Text>
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <CheckBox 
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check}
                        onPress={() => setCheck(!check)}
                    />
                </ListItem>
        )
    }else{
       return(
        <ListItem
        Component={TouchableHighlight}
        containerStyle={{}}
        pad={20}
        style={{width:'90%'}}
    >
                <Avatar
                    source={{
                    uri:
                        "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                    }}
                />
                <ListItem.Content>
                    <ListItem.Title>
                    <Text 
                        h3Style={
                            {
                                color:colors.black,
                                fontSize:18   
                            }
                        
                        }
                        h3={true}
                    
                    >{title}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                    <Text

                        style={
                            {
                                color:colors.grey,
                                fontSize:15
                            }
                        }
                    
                    >{subtitle}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
       )
    }
  
}


