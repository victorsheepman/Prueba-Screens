import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Text as Title, Icon, Input,CheckBox  } from '@rneui/themed';   
import { colors } from '../../style/base';
import { BoxPicture } from '../../components/BoxPicture';
import {Slider} from '../../components/Slider'
import { SliderHour } from '../../components/SliderHour';
import { ButtonComponent } from '../../atoms/buttons/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
export const RealizarReservacionScreen = () => {
    const navigator = useNavigation();
  return (
    <>
       <View style={styles.childrenHeader}> 
                <Icon type='font-awesome' name='chevron-left' />
                <Title h4={true} h4Style={{fontSize:16}}>Realizar reservacion</Title>
                <Image style={styles.logo} source={require("../../assets/logo.png")}/>
            </View> 
            <ScrollView>
        <View style={styles.container}> 
            
           
           <View style={{width:'100%', height:'auto', backgroundColor:colors.gold}}>
               <View style={styles.calendarHeader}>
                    <Icon 
                        type='font-awesome' 
                        name='chevron-left' 
                        color={colors.white} 
                    />
                    <Title 
                        h4={true} 
                        h4Style={{fontSize:20, color:colors.white}}>
                            Mayo, 2021
                    </Title>
                    <Icon 
                        type='font-awesome' 
                        name='chevron-right' 
                        color={colors.white} 
                    />
               </View>
               <View style={styles.fila} >
                    <Text style={{color:'white'}}>1</Text>
                    <Text style={{color:'white'}}>2</Text>
                    <Text style={{color:'white'}}>3</Text>
                    <Text style={{color:'white'}}>4</Text>
                    <Text style={{color:'white'}}>5</Text>
                    <Text style={{color:'white'}}>6</Text>
                    <Text style={{color:'white'}}>7</Text>
               </View>
               <View style={styles.fila} >
                    <Text style={{color:'white'}}>8</Text>
                    <Text style={{color:'white'}}>9</Text>
                    <Text style={{color:'white'}}>10</Text>
                    <Text style={{color:'white'}}>11</Text>
                    <Text style={{color:'white'}}>12</Text>
                    <Text style={{color:'white'}}>13</Text>
                    <Text style={{color:'white'}}>14</Text>
               </View>
               <View style={styles.fila} >
                    <Text style={{color:'white'}}>15</Text>
                    <Text style={{color:'white'}}>16</Text>
                    <Text style={{color:'white'}}>17</Text>
                    <Text style={{color:'white'}}>18</Text>
                    <Text style={{color:'white'}}>19</Text>
                    <Text style={{color:'white'}}>20</Text>
                    <Text style={{color:'white'}}>21</Text>
               </View>
               <View style={styles.fila} >
                    <Text style={{color:'white'}}>22</Text>
                    <Text style={{color:'white'}}>23</Text>
                    <Text style={{color:'white'}}>24</Text>
                    <Text style={{color:'white'}}>25</Text>
                    <Text style={{color:'white'}}>26</Text>
                    <Text style={{color:'white'}}>27</Text>
                    <Text style={{color:'white'}}>28</Text>
               </View>
               <View style={{
                width:'100%',
                height:'auto',
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start', 
                alignItems:'center',
                paddingHorizontal:12,
                paddingVertical:9,
               }} >
                    <Text style={{color:'white'}} >29</Text>
                    <Text style={{marginLeft:8, color:'white'}}>30</Text>
                    <Text style={{marginLeft:8, color:'white'}}>31</Text>
               </View>
               <View style={
                {

                    width: 350, 
                    height:120, 
                    backgroundColor:colors.white, 
                    marginLeft:30, 
                    flexDirection:"row",
                    alignItems:'center',
                    justifyContent:'space-between',
                    borderRadius:6, 
                    paddingHorizontal:12,
                    marginTop:50                  
                }
                }>
                    <Image 
                        source={require('../../assets/almanzar.png')}
                        style={{
                            width:100,
                            height: 100
                        }}
                    />
                    <View style={{width:'auto', height:'auto'}}>
                        <Title h3={true} h3Style={{fontSize:20}}>Taller Almanzar</Title>
                        <Text style={{color:colors.grey}}>Taller de Vehiculos</Text>
                        
                    </View>
                    <BoxPicture />
               </View>
               <View style={styles.footer}>
                        <SliderHour />
                        <ButtonComponent 
                            widthButton='80%'
                            background={colors.gold} 
                            title='Reservar' 
                            textColor={colors.white} 
                            margin={12}
                            handle={()=>navigator.navigate('HojaEntradaModal')}
                        />
               </View>
           </View>
          
        </View> 
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical:20
       
    },
    childrenHeader:{
        width: "100%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    logo:{
        width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:10,
    },
    calendarHeader:{
        width: '100%',
        height: 30,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

    },
    fila:{
        width:'100%',
                height:'auto',
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between', 
                alignItems:'center',
                paddingHorizontal:12,
                paddingVertical:9
    }, 
    footer:{
        width: '100%',
        height: 200,
        backgroundColor:'#eceaff', 
        borderRadius:8, 
        justifyContent:'center',
        alignItems:'center',
        marginTop:66
    }
})