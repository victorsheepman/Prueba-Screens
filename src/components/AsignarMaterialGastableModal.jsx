import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Card,   } from '@rneui/themed';
import { ButtonComponent } from '../atoms/buttons/ButtonComponent';
import { colors, padding } from '../style/base';
import { BlackTitle } from './BlackTitle';
import { InputWhite } from '../atoms/InputWhite';
import { Accordion } from './Accordion';
import { Slider } from './Slider';
export const AsignarMaterialGastableModal = ({setModal}) => {
  return (
    <View style={styles.container}> 
      <View style={styles.children}>
        <ScrollView>
        <View style={styles.childrenHeader}>
          <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <Title h4={true} h4Style={{fontSize:16}}>Asignar material gastable</Title>
            <Icon 
              type='antdesign' 
              name='closecircleo' 
              onPress={()=> setModal(false)}
            />
          </View>
          <Slider />
          <ButtonComponent
            title='Asignacion lista !'
            widthButton='100%'
            background={colors.gold}
            textColor={colors.white}
            margin={12}
          />
          <BlackTitle title='listado de materiales' margin={12} />
          <View>
          <InputWhite 
            title='Tiempo de realizacion' 
            inputWidth='100%' 
            radius={5} 
            inputHeight={50} 
            margin={21} 
            border={2} 
          />
          <ButtonComponent
            title='Buscar'
            widthButton='100%'
            background={colors.black}
            textColor={colors.white}
            margin={12}
          />
          <Card.Divider style={{marginTop:padding.md}} />
          <Accordion title='Lija 150'>
            <View style={{
              width: '100%',
              height: 'auto',
              alignItems:'center'
            }}>
               <InputWhite 
                  title='Buscar material gastable' 
                  inputWidth='90%' 
                  radius={5} 
                  inputHeight={50} 
                  margin={21} 
                  border={2} 
                />
              <ButtonComponent
                title='Buscar'
                widthButton='90%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
              />

            </View>

          </Accordion>
          <Accordion title='Lija 180'>
            <View style={{
              width: '100%',
              height: 'auto',
              alignItems:'center'
            }}>
               <InputWhite 
                  title='Buscar material gastable' 
                  inputWidth='90%' 
                  radius={5} 
                  inputHeight={50} 
                  margin={21} 
                  border={2} 
                />
              <ButtonComponent
                title='Buscar'
                widthButton='90%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
              />

            </View>

          </Accordion>
          <Accordion title='Lija 100'>
            <View style={{
              width: '100%',
              height: 'auto',
              alignItems:'center'
            }}>
               <InputWhite 
                  title='Buscar material gastable' 
                  inputWidth='90%' 
                  radius={5} 
                  inputHeight={50} 
                  margin={21} 
                  border={2} 
                />
              <ButtonComponent
                title='Buscar'
                widthButton='90%'
                background={colors.black}
                textColor={colors.white}
                margin={12}
              />

            </View>

          </Accordion>
          </View>
          </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
      right: 0,
      left: 0,
      backgroundColor:'rgba(0, 0, 0, 0.8)',
      zIndex: 2,
      display:'flex',
      paddingHorizontal: 16,
      paddingVertical:21,
      justifyContent:'center'
},
children:{
    width: '100%',
    height: "auto",
    backgroundColor:'white',
    paddingHorizontal: 12,
    paddingVertical:6
},
childrenHeader:{
    width: "100%",
    height: 40,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
},
logo:{
    width:40,
    height:40,
    backgroundColor:'red',
    borderRadius:10,
},
duda:{
  width:'100%',
  height: 130,
  marginTop:12,
  backgroundColor:'yellow'
}
});