import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputWhite } from '../../atoms/InputWhite'
import { InputAccordion } from '../../atoms/InputAccordion'
import { colors, padding } from '../../style/base'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { Card } from '@rneui/themed'
import { Accordion } from '../../components/Accordion'

import { CrearMaterialesGastablesModal } from '../../components/CrearMaterialesGastablesModal'
import { useNavigation } from '@react-navigation/native'

const MaterialesGastablesScreen = () => {
    const [first, setfirst] = useState(false);
    const navigator = useNavigation();
  return (
      <>
      <HeaderComponent iconLeft='align-justify' type='antdesign' iconRight='pluscircleo' handle={()=>setfirst(true)} />
        <BlackTitle title='Materiales gastables' />
        <ScrollView>
        <View style={styles.container}>
            <InputWhite 
                title='Buscar Material o producto' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputAccordion
                title='Filtrar por categoria' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
                type='lijas'
            />
            <ButtonComponent
                title='Buscar'
                widthButton='100%'
                background={colors.gold}
                textColor={colors.white}
                margin={12}

               
            />
            <Card.Divider style={{marginTop:padding.md}} />
            <Accordion title='Lija 150'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Codigo de producto: 0000026'},
                                {key: 'Categoria de producto: Lijas'},
                                {key: 'Unidad de medida: Cantidad'},
                                {key: 'Disponible en stock: 50'},   
                            ]}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                        />
                       
                    </View> 
                    <View style={styles.input}>
                        <ButtonComponent 
                                widthButton={"48%"} 
                                title="Eliminar" 
                                background={colors.red} 
                                textColor={colors.white} 
                                margin={12}
                        />
                            <ButtonComponent 
                                widthButton={"48%"} 
                                title="Editar" 
                                background={colors.black} 
                                textColor={colors.white} 
                                margin={12}
                            />
                    </View>
                </View>

          </Accordion>
          <Card.Divider style={{marginTop:padding.md}} />
          <Accordion title='Lija 150'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Codigo de producto: 0000026'},
                                {key: 'Categoria de producto: Lijas'},
                                {key: 'Unidad de medida: Cantidad'},
                                {key: 'Disponible en stock: 50'},   
                            ]}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                        />
                       
                    </View> 
                    <View style={styles.input}>
                        <ButtonComponent 
                                widthButton={"48%"} 
                                title="Eliminar" 
                                background={colors.red} 
                                textColor={colors.white} 
                                margin={12}
                        />
                            <ButtonComponent 
                                widthButton={"48%"} 
                                title="Editar" 
                                background={colors.black} 
                                textColor={colors.white} 
                                margin={12}
                                handle={()=>setfirst(true)}
                            />
                    </View>
                </View>

          </Accordion>
          <Card.Divider style={{marginTop:padding.md}} />
          <Accordion title='Lija 150'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Codigo de producto: 0000026'},
                                {key: 'Categoria de producto: Lijas'},
                                {key: 'Unidad de medida: Cantidad'},
                                {key: 'Disponible en stock: 50'},   
                            ]}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                        />
                       
                    </View> 
                    <View style={styles.input}>
                        <ButtonComponent 
                                widthButton={"48%"} 
                                title="Eliminar" 
                                background={colors.red} 
                                textColor={colors.white} 
                                margin={12}
                        />
                            <ButtonComponent 
                                widthButton={"48%"} 
                                title="Editar" 
                                background={colors.black} 
                                textColor={colors.white} 
                                margin={12}
                            />
                    </View>
                </View>

          </Accordion>
        </View>
        </ScrollView>
        {
            first && <CrearMaterialesGastablesModal setModal={setfirst} />
        }
    </>
  )
}

export default MaterialesGastablesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:20
    },
    input:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:'center',
    },
})