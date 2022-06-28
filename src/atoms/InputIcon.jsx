import { Input, Icon } from '@rneui/themed';
import { StyleSheet, View, TextInput } from 'react-native';
export const InputIcon = ({title = "hola", inputWidth="40%", margin=0, radius=0, inputHeight=40, border=2, icon}) => (
    <View style={styles.searchSection}>  
        <TextInput
            style={styles.input}
            placeholder="User Nickname"
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
        />
        <Icon name='heartbeat'
        type='font-awesome' style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth:1
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        
    },
  });