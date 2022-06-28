import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { CategoriaServicioScreen } from '../screens/Taller/CategoriaServicioScreen';
import { RealizarCotizacionScreen } from '../screens/Taller/RealizarCotizacionScreen';
import { SolicitudSeguro } from '../screens/Taller/SolicitudSeguro';
import { SolicitudTalleresScreen } from '../screens/Taller/SolicitudTalleresScreen';
import { SolicitudIdScreen } from '../screens/Taller/SolicitudIdScreen ';
import { CotizaconIdScreen } from '../screens/Taller/CotizaconIdScreen';
import { PiezasRecibidasScreen } from '../screens/Taller/PiezasRecibidasScreen';
import { ConfirmarEntregaScreen } from '../screens/Taller/ConfirmarEntregaScreen';
import InstalacionProcesoScreen from '../screens/Taller/InstalacionProcesoScreen';
import { CalificarTallerScreen } from '../screens/Taller/CalificarTallerScreen';
import { VehiculoScreen } from '../screens/VehiculoScreen';
import { VehiculosReparacionScreen } from '../screens/Taller/VehiculosReparacionScreen';
import { CotizacionTalleresScreen } from '../screens/Taller/CotizacionTalleresScreen';
import { ReparacionPendienteScreen } from '../screens/Taller/ReparacionPendienteScreen';
import { ServicioScreen } from '../screens/Taller/ServicioScreen';
import MaterialesGastablesScreen from '../screens/Taller/MaterialesGastablesScreen';
import { EmpleadoEspecialistaScreen } from '../screens/Taller/EmpleadoEspecialistaScreen';
import { BilleteraScreen } from '../screens/Taller/BilleteraScreen';
import { CuentasBancariasScreen } from '../screens/Taller/CuentasBancariasScreen';
import { CuentasBancariasScreenFull } from '../screens/Taller/CuentasBancariasScreenFull';
import { RetiroEfectivoScreen } from '../screens/Taller/RetiroEfectivoScreen';
import { NotificacionModal } from '../components/NotificacionModal';
import { BuscarServicioScreen } from '../screens/Taller/BuscarServicioScreen';
import { PedirComoDeseoModal } from '../components/PedirComoDeseoModal';
import { DeseosScreen } from '../screens/Taller/DeseosScreen';
import { TengoEsteArticuloModal } from '../components/TengoEsteArticuloModal';
import { ListaDeseosScreen } from '../screens/Taller/ListaDeseosScreen';
import { CotizacionId04Screen } from '../screens/Taller/CotizacionId04Screen';
import { OrdenCompraScreen } from '../screens/Taller/OrdenCompraScreen';
import { CrearMaterialesGastablesModal } from '../components/CrearMaterialesGastablesModal';
import { AgregarEmpleadoModal } from '../components/AgregarEmpleadoModal';
import { ReparacionRealizarScreen } from '../screens/Taller/ReparacionRealizarScreen';
import { EmpleadoScreen } from '../screens/Taller/EmpleadoScreen';
import TransferenciaListaModal from '../screens/Taller/TransferenciaListaModal';
import { RegistrarNuevasCuentasBancariasModal } from '../components/RegistrarNuevasCuentasBancariasModal';
import { HojaEntradaModal } from '../components/HojaEntradaModal';
import { InventarioModal } from '../components/InventarioModal';
import { DatosSeguroModal } from '../components/DatosSeguroModal';
import { AgregarDocumentacionModal } from '../components/AgregarDocumentacionModal';
import EspecirficarDanosModal from '../components/EspecirficarDanosModal ';
import CuentasPorCobrarScreen from '../screens/Taller/CuentasPorCobrarScreen';
import { CuentasCobrarTwo } from '../screens/Taller/CuentasCobrarTwo';
import { MisOrdenesScreen } from '../screens/Taller/MisOrdenesScreen';
import { FacturtaIdScreen } from '../screens/Taller/FacturtaIdScreen';
import { MasOpcionesModal } from '../components/MasOpcionesModal';
import { InicioScreen } from '../screens/Taller/InicioScreen';
import { PasoOneScreen } from '../screens/Taller/PasoOneScreen';
import { PasotwoScreen } from '../screens/Taller/PasoTwoScreen';
import { PasoThreeScreen } from '../screens/Taller/PasoThreeScreen';
import { ServiciosPendientesScreen } from '../screens/Taller/ServiciosPendientesScreen';
import { AsignarEspecialistaModal } from '../components/AsignarEspecialistaModal';
import { DetallesVehiculo } from '../components/DetallesVehiculo';
import { RealizarReservacionScreen } from '../screens/Taller/RealizarReservacionScreen';
import { BusquedaTalleres } from '../screens/Taller/BusquedaTalleres';
import { RealizarSolicitudModal } from '../components/RealizarSolicitudModal';
const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='InicioScreen' component={InicioScreen}   />
        <Stack.Screen name='CategoriasServicios' component={CategoriaServicioScreen} />
        <Stack.Screen name='RelizarCotizacion' component={RealizarCotizacionScreen} />
        <Stack.Screen name='SolicitudSeguro' component={SolicitudSeguro} />
        <Stack.Screen name='SolicitudTalleres' component={SolicitudTalleresScreen} />
        <Stack.Screen name='SolicitudId' component={SolicitudIdScreen} />
        <Stack.Screen name='CotizacionId' component={CotizaconIdScreen} />
        <Stack.Screen name='PiezasRecibidas' component={PiezasRecibidasScreen} />
        <Stack.Screen name='ConfirmarEntrega' component={ConfirmarEntregaScreen} />
        <Stack.Screen name='InstalacionProceso' component={InstalacionProcesoScreen} />
        <Stack.Screen name='CalificarTaller' component={CalificarTallerScreen} />
        <Stack.Screen name='VehiculoReparacion' component={VehiculosReparacionScreen} />
        <Stack.Screen name='RealizaCotizacion' component={RealizarCotizacionScreen} />
        <Stack.Screen name='CotizacionTalleres' component={CotizacionTalleresScreen} />
        <Stack.Screen name='CrearMaterial' component={CrearMaterialesGastablesModal} />
        <Stack.Screen name='ReparacionPendiente' component={ReparacionPendienteScreen} />
        <Stack.Screen name='ServicioScreen' component={ServicioScreen} />
        <Stack.Screen name='MaterialesGastables' component={MaterialesGastablesScreen} />
        <Stack.Screen name='EmpleadosEspecialistas' component={EmpleadoEspecialistaScreen} />
        <Stack.Screen name='Billetera' component={BilleteraScreen} />
        <Stack.Screen name='CuentasBancarias' component={CuentasBancariasScreen} />
        <Stack.Screen name='CuentasBancariasFull' component={CuentasBancariasScreenFull} />
        <Stack.Screen name='RetiroEfectivo' component={RetiroEfectivoScreen} />
        <Stack.Screen name='NotificacionModal' component={NotificacionModal} />
        <Stack.Screen name='BuscarServicioScreen' component={BuscarServicioScreen} />
        <Stack.Screen name='PedirComoDeseoModal' component={PedirComoDeseoModal} />
        <Stack.Screen name='DeseosScreen' component={DeseosScreen} />
        <Stack.Screen name='TengoEsteArticuloModal' component={TengoEsteArticuloModal} />
        <Stack.Screen name='ListaDeseosScreen' component={ListaDeseosScreen} />
        <Stack.Screen name='CotizacionId04Screen' component={CotizacionId04Screen} />
        <Stack.Screen name='ordenCompra' component={OrdenCompraScreen} />
        <Stack.Screen name='AddEmpleado' component={AgregarEmpleadoModal} />
        <Stack.Screen name='reparacionRealizar' component={ReparacionRealizarScreen} />
        <Stack.Screen name='EmpleadoScreen' component={EmpleadoScreen} />
        <Stack.Screen name='RegistrationScreen' component={RegistrarNuevasCuentasBancariasModal} />
        <Stack.Screen name='CuentasFullScreen' component={CuentasBancariasScreenFull} />
        <Stack.Screen name='TranferenciaModal' component={TransferenciaListaModal} />
        <Stack.Screen name='HojaEntradaModal' component={HojaEntradaModal} />
        <Stack.Screen name='InventarioModal' component={InventarioModal} />
        <Stack.Screen name='DatosSeguroModal' component={DatosSeguroModal} />
        <Stack.Screen name='AgregarDocumentacionModal' component={AgregarDocumentacionModal}   />
        <Stack.Screen name='EspecirficarDanosModal' component={EspecirficarDanosModal}   />
        <Stack.Screen name='CuentasPorCobrarScreen' component={CuentasPorCobrarScreen}   />
        <Stack.Screen name='CuentasCobrarTwo' component={CuentasCobrarTwo}   />
        <Stack.Screen name='MisOrdenes' component={MisOrdenesScreen}   /> 
        <Stack.Screen name='FacturtaIdScreen' component={FacturtaIdScreen}   />
        <Stack.Screen name='MasOpcionesModal' component={MasOpcionesModal}   />
        <Stack.Screen name='HomeScreen' component={HomeScreen}   />
        <Stack.Screen name='RelizarSolicitud' component={RealizarSolicitudModal}   />
        <Stack.Screen name='PasoOne' component={PasoOneScreen}   />
        <Stack.Screen name='PasoTwo' component={PasotwoScreen}   />
        <Stack.Screen name='PasoThree' component={PasoThreeScreen}   />
        <Stack.Screen name='ServiciosPendientes' component={ServiciosPendientesScreen}   />
        <Stack.Screen name='AsignacionEspecialista' component={AsignarEspecialistaModal}   />
        <Stack.Screen name='DetallesVehiculo' component={DetallesVehiculo}   />
        <Stack.Screen name='RealizarReservacion' component={RealizarReservacionScreen}   />
        <Stack.Screen name='Busqueda' component={BusquedaTalleres}   />


    </Stack.Navigator>
  )
}

export default NavigationStack