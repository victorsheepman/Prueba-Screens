import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../components/Header'
import { BlackTitle } from '../../components/BlackTitle'
import { InputAccordion } from '../../atoms/InputAccordion'
import { InputWhite } from '../../atoms/InputWhite'
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent'
import { Card } from '@rneui/themed'
import { colors, padding } from '../../style/base'
import { Accordion } from '../../components/Accordion'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AgregarEmpleadoModal } from '../../components/AgregarEmpleadoModal'

export const EmpleadoEspecialistaScreen = () => {
    const [modal, setModal] = useState(false)
    const navigator = useNavigation()
  return (
    <>
        <HeaderComponent iconLeft='align-justify' type='antdesign' iconRight='pluscircleo' handle={()=>setModal(true)} />
        <BlackTitle title='Empleados o especialistas' />
        <ScrollView>
        <View style={styles.container}>
            <InputWhite 
                title='Buscar Empleado' 
                inputWidth='100%' 
                radius={5} 
                inputHeight={50} 
                margin={21} 
                border={2} 
            />
            <InputAccordion
                title='Filtrar por especialidad' 
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
                handle={()=>navigator.navigate('AddEmpleado')}
            />
            <Card.Divider style={{marginTop:padding.md}} />
            <Accordion title='Pedro Martinez Perez'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Nombre: Pedro'},
                                {key: 'Apellido: Martinez Perez'},
                                {key: 'Cedula: 402-000000-5'},
                                {key: 'Correo: Pedro@gmail.com'}, 
                                {key: 'Telefono: 809-000-0000'},
                                {key: 'Especialidad: (Desabollador Pintor)'},
                                {key: 'Pago: 25% de comision'},
                                {key: 'Direccion: Ver direccion'},     
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
          <Accordion title='Ramon Marquez Perez'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Nombre: Ramon'},
                                {key: 'Apellido: Marquez Perez'},
                                {key: 'Cedula: 412-000000-5'},
                                {key: 'Correo: Ramon@gmail.com'}, 
                                {key: 'Telefono: 803-050-0000'},
                                {key: 'Especialidad: (Desabollador Pintor)'},
                                {key: 'Pago: 25% de comision'},
                                {key: 'Direccion: Ver direccion'},     
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
          <Accordion title='Matia Alcantara'>
                <View style={{
                width: '100%',
                height: 'auto',
                }}>
                     <View style={styles.list}>
                        <FlatList
                            data={[
                                {key: 'Nombre: Matia'},
                                {key: 'Apellido: Alcantara'},
                                {key: 'Cedula: 402-000000-5'},
                                {key: 'Correo: Pedro@gmail.com'}, 
                                {key: 'Telefono: 809-000-0000'},
                                {key: 'Especialidad: (Desabollador Pintor)'},
                                {key: 'Pago: 25% de comision'},
                                {key: 'Direccion: Ver direccion'},     
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
            modal && <AgregarEmpleadoModal setModal={setModal} />
        }
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
