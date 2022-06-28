import 'react-native-gesture-handler';
import { StyleSheet, View, Text, SliderBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigations/NavigationStack';
//import { NavigationTab } from './src/navigations/NavigationTab';
import HomeScreen from './src/screens/HomeScreen';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { ModalRequest } from './src/components/ModalRequest';
import { CardAuto } from './src/components/CardAuto';
import { ContanerShadow } from './src/components/ContanerShadow';
import { InputWhite } from './src/atoms/InputWhite';
import { VehiculoScreen } from './src/screens/VehiculoScreen';
import { ResultadoScreen } from './src/screens/ResultadoScreen';
import { FiltrosScreen } from './src/screens/FiltrosScreen';
import { AddAutoModal } from './src/components/AddAutoModal';
import { AutosVentaScreen } from './src/screens/AutosVentaScreen';
import { NuevaCuentaModal } from './src/components/NuevaCuentaModal';
import { AvisoTransferencia } from './src/components/AvisoTransferencia';
import { TransferenciaEmpleadosSceen } from './src/screens/TransferenciaEmpleadosSceen';
import { CuentasBancarias } from './src/screens/CuentasBancarias';
import { RetroEfectivo } from './src/screens/RetroEfectivo';
import { UserScreen } from './src/screens/UserScreen';
import { FinanciameientoScreen } from './src/screens/FinanciamientoScreen';
import { CuentasBancariasTwo } from './src/screens/CuentasBancariasTwo';
import { TransferenciaEmpleadosTwo } from './src/screens/TransferenciaEmpleadosTwo';
import { FinancierasAsociadasScreen } from './src/screens/FinancierasAsociadasScreen';
import { Credito } from './src/components/Credito';
import { PagoCreditoScreen } from './src/screens/PagoCreditoScreen';
import { CuentasCobrarScreen } from './src/screens/CuentasCobrarScreen';
import { CuentasCobrarTwo } from './src/screens/Taller/CuentasCobrarTwo';
import { Servicio } from './src/components/Servicio';
import { CategoriaServicioScreen } from './src/screens/Taller/CategoriaServicioScreen';
import { RealizarSolicitudModal } from './src/components/RealizarSolicitudModal';
import { AddPicture } from './src/components/AddPicture';
import { SolicitudSeguro } from './src/screens/Taller/SolicitudSeguro';
import {SolicitudModal} from './src/components/SolicitudModal';
import { SolicitudTalleresScreen } from './src/screens/Taller/SolicitudTalleresScreen';
import { SolicitudIdScreen } from './src/screens/Taller/SolicitudIdScreen ';
import { MetodosPagoModal } from './src/components/MetodosPagoModal';
import { NotificacionModal } from './src/components/NotificacionModal';
import { PiezasRecibidasScreen } from './src/screens/Taller/PiezasRecibidasScreen';
import { CalificarTallerScreen } from './src/screens/Taller/CalificarTallerScreen';
import { ConfirmarEntregaScreen } from './src/screens/Taller/ConfirmarEntregaScreen';
import InstalacionProcesoScreen from './src/screens/Taller/InstalacionProcesoScreen';
import { VehiculosReparacionScreen } from './src/screens/Taller/VehiculosReparacionScreen';
import { RealizarCotizacionScreen } from './src/screens/Taller/RealizarCotizacionScreen';
import { CotizacionTalleresScreen } from './src/screens/Taller/CotizacionTalleresScreen';
import { CotizaconIdScreen } from './src/screens/Taller/CotizaconIdScreen';
import { ReparacionPendienteScreen } from './src/screens/Taller/ReparacionPendienteScreen';
import {/*Especialista*/} from './src/components/Especialista';
import { AsignarEspecialistaModal } from './src/components/AsignarEspecialistaModal';
import { AsignarMaterialGastableModal } from './src/components/AsignarMaterialGastableModal';
import MaterialesGastablesScreen from './src/screens/Taller/MaterialesGastablesScreen';
import { CrearMaterialesGastablesModal } from './src/components/CrearMaterialesGastablesModal';
import { EmpleadoEspecialistaScreen } from './src/screens/Taller/EmpleadoEspecialistaScreen';
import { AgregarEmpleadoModal } from './src/components/AgregarEmpleadoModal';
import { ReparacionRealizarScreen } from './src/screens/Taller/ReparacionRealizarScreen';
import { SelectAccordion } from './src/components/SelectAccordion';
import { EmpleadoScreen } from './src/screens/Taller/EmpleadoScreen';
import { CuentasBancariasScreen } from './src/screens/Taller/CuentasBancariasScreen';
import { CuentasBancariasScreenFull } from './src/screens/Taller/CuentasBancariasScreenFull';
import { RegistrarNuevasCuentasBancariasModal } from './src/components/RegistrarNuevasCuentasBancariasModal';
import { BilleteraScreen } from './src/screens/Taller/BilleteraScreen';
import { Factura } from './src/components/Factura';
import { RetiroEfectivoScreen } from './src/screens/Taller/RetiroEfectivoScreen';
import TransferenciaLista from './src/screens/Taller/TransferenciaLista';
import TransferenciaListaModal from './src/screens/Taller/TransferenciaListaModal';
import { Cronometro } from './src/components/Cronometro';
import { Slider } from './src/components/Slider';
import { PasoOneScreen } from './src/screens/Taller/PasoOneScreen';
import { PasotwoScreen } from './src/screens/Taller/PasoTwoScreen';
import { PasoThreeScreen } from './src/screens/Taller/PasoThreeScreen';
import { ServicioScreen } from './src/screens/Taller/ServicioScreen';
import { InicioScreen } from './src/screens/Taller/InicioScreen';
import { BuscarServicioScreen } from './src/screens/Taller/BuscarServicioScreen';
import { PedirComoDeseoModal } from './src/components/PedirComoDeseoModal';
import { DeseosScreen } from './src/screens/Taller/DeseosScreen';
import { TengoEsteArticuloModal } from './src/components/TengoEsteArticuloModal';
import { ListaDeseosScreen } from './src/screens/Taller/ListaDeseosScreen';
import { CotizacionId04Screen } from './src/screens/Taller/CotizacionId04Screen';
import { OrdenCompraScreen } from './src/screens/Taller/OrdenCompraScreen';
import CuentasPorCobrarScreen from './src/screens/Taller/CuentasPorCobrarScreen';
import EspecirficarDanosModal from './src/components/EspecirficarDanosModal ';
import { AgregarDocumentacionModal } from './src/components/AgregarDocumentacionModal';
import { HojaEntradaModal } from './src/components/HojaEntradaModal';
import { InventarioModal } from './src/components/InventarioModal';
import { DatosSeguroModal } from './src/components/DatosSeguroModal';
import { MisOrdenesScreen } from './src/screens/Taller/MisOrdenesScreen';
import { FacturtaIdScreen } from './src/screens/Taller/FacturtaIdScreen';
import { MasOpcionesModal } from './src/components/MasOpcionesModal';
import { ServiciosPendientesScreen } from './src/screens/Taller/ServiciosPendientesScreen';
import { RealizarReservacionScreen } from './src/screens/Taller/RealizarReservacionScreen';
import { BusquedaTalleres } from './src/screens/Taller/BusquedaTalleres';
import { DetallesVehiculo } from './src/components/DetallesVehiculo';
import { MenuModal } from './src/components/MenuModal';



export default function App() {
  return (
    <NavigationContainer > 
      {<NavigationStack  />}
      {/*<NavigationTab />*/}
      {/*<HomeScreen />*/}
      {/*<RegistrationScreen />*/} 
      {/*<ModalRequest />*/}
      {/*<VehiculoScreen />*/}
      {/*<ResultadoScreen />*/}
      {/*<AddAutoModal />*/}
      {/*<AutosVentaScreen />*/}
      {/*<NuevaCuentaModal />*/}
      {/*<AvisoTransferencia />*/}
      {/*<TransferenciaEmpleadosSceen />*/}
      {/*<RetroEfectivo />/}
      {/*<UserScreen />*/}
      {/*<FinanciameientoScreen />*/}

      {/*<CuentasBancariasTwo />*/}

      {/*<TransferenciaEmpleadosTwo />*/}

      {/*<FinancierasAsociadasScreen />*/}

      {/*<PagoCreditoScreen />*/}

      {/*<CuentasCobrarScreen />*/}

      {/*<CuentasCobrarTwo />*/}

      {/*  Talleres  */}


      {/*<CategoriaServicioScreen />*/}{/* listo */}
      {/*<RealizarSolicitudModal />*/}{/*lista*/}
      {/*<SolicitudSeguro />*/}
      {/*<SolicitudModal/>*/}
      {/*<SolicitudTalleresScreen />*/}
      {/*<SolicitudIdScreen />*/}
      {/*<MetodosPagoModal />*/}
      {/*<NotificacionModal />*/}
      {/*<PiezasRecibidasScreen />*/}
      {/*<CalificarTallerScreen />*/}
      {/*<ConfirmarEntregaScreen />*/}
      {/*<InstalacionProcesoScreen />*/}
      {/*<VehiculosReparacionScreen />*/}
      {/*<RealizarCotizacionScreen />*/}
      {/*<CotizacionTalleresScreen />*/}
      {/*<PiezasRecibidasScreen />*/}
      {/*<ReparacionPendienteScreen />*/}
      {/*<AsignarEspecialistaModal/>*/}
      {/*<AsignarMaterialGastableModal />*/}
      {/*<MaterialesGastablesScreen />*/}
      {/*<CrearMaterialesGastablesModal />*/}
      {/*<AgregarEmpleadoModal />*/}
      {/*<EmpleadoScreen />*/}
      {/*<CuentasBancariasScreen />*/}
      {/*<CuentasBancariasScreenFull />*/}
      {/*<RegistrarNuevasCuentasBancariasModal />*/}
      {/*<BilleteraScreen />*/}
      {/*<RetiroEfectivoScreen />*/}
      {/*<SolicitudSeguro />*/}
      {/*<PasotwoScreen />*/}
      {/*<PasoThreeScreen />*/}
      {/*<ServicioScreen />*/}
      {/*<EmpleadoEspecialistaScreen />*/}
      {/*<InicioScreen />*/}
      {/*
        <BuscarServicioScreen />
        */
      }
      {/*
        < PedirComoDeseoModal />
        */
      }
      {/*
        <DeseosScreen />
        */
      }
      {/*
        <TengoEsteArticuloModal />
        */
      }
      {/*
        <ListaDeseosScreen />
        */
      }
      {/*
        <CotizacionId04Screen />
        */
        
      }
      {/*
        <OrdenCompraScreen />
        */
      }
      {/*
        <CuentasPorCobrarScreen />
        */
      }
      {/*
        <CuentasCobrarTwo />
        */
      }
      {/*
        <EspecirficarDanosModal />
        */
      }
      {/*
        <AgregarDocumentacionModal />
       */ 
      }
      {/*
        <HojaEntradaModal />
        /*
      }
      {
         /*
        <InventarioModal />
          */
        
      }
      {/*
         
         <DatosSeguroModal />
           */
         
       }
       {/*
         
         <MisOrdenesScreen />
          */  
       }
       {
        /*
         
         <FacturtaIdScreen />
          */  
       }
       {/*
        <MasOpcionesModal />
        */
       }
        { /*
          <ReparacionRealizarScreen />
          */
        }
        {/* Listo*/}
        {/*
          <ServiciosPendientesScreen />
        */
      }
      {/*
        <RealizarReservacionScreen />
        */
      }
      {/*
        <BusquedaTalleres />
        */
      }
      {/*
        <DetallesVehiculo />
        */
      }
      {/*
        <MenuModal />
        */
      }
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  children:{
    width: '100%',
    height: "auto",
    backgroundColor:'white',
    paddingHorizontal: 12,
    paddingVertical:6
},
});


