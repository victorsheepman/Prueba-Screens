import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../style/base'
import { Text as Title, Icon, Card } from '@rneui/themed';
import { LinkBox } from './LinkBox';

export const MenuModal = ({setModal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
          <View 
            style={{
              position:'absolute',
              top: 17,
              right: 5
            }}>
            <Icon 
              type='antdesign' 
              name='closecircleo' 
              onPress={()=>setModal(false)}
             
                    
            />
       </View>
        <View
          style={{
            width: '100%',
            height:'auto',
            justifyContent:'center',
            alignItems:'center',
          }}
        > 
        <Image 
          style={{
            width:100,
            height: 100,
            borderRadius:50,
            backgroundColor:colors.black
          }}
        />
        <Title h4={true} h4Style={{fontSize:18, marginTop:12}}>Nombre del Cliente</Title>
        <Text style={{color:colors.gold, fontSize:17}}>Usuario ID</Text>
        </View>
       <Card.Divider />
       <ScrollView>
       <LinkBox title='Mi Perfil' />
      <LinkBox 
        title='Vehiculo Reparacion' 
        ruta='VehiculoReparacion' 
      />
      <LinkBox 
        title='Solicitud de seguros' 
        ruta='SolicitudSeguro' 
      />
      <LinkBox 
        title='Reparaciones' 
        ruta='ReparacionPendiente' 
      />
       <LinkBox 
        title='Materiales Gastables' 
        ruta='MaterialesGastables' 
      />
      <LinkBox 
        title='Empleados o especialistas' 
        ruta='EmpleadosEspecialistas'       
      />
      <LinkBox 
        title='Lista de deseos' 
        ruta='ListaDeseosScreen'       
      />
      <LinkBox 
        title='Cuentas Por cobrar' 
        ruta='CuentasCobrarTwo'       
      />
      <LinkBox 
        title='Piezas Recibidas' 
        ruta='PiezasRecibidas'       
      />
      <LinkBox 
        title='Notificaciones' 
        ruta=''       
      />  
      <LinkBox 
        title='Mis Ordenes' 
        ruta='MisOrdenes'       
      />
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
    paddingHorizontal: 20,
    paddingVertical:20
  },
children:{
  width: '100%',
  height: "auto",
  backgroundColor:'white',
  paddingHorizontal: 12,
  paddingVertical:6
},
})