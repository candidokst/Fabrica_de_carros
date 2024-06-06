import {Text, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}){
  return(
    <View style={estilos.container}>
    <Text style={estilos.textos}>
    Ola mundo
    </Text>
    <View style={estilos.contIcon}>
        <AntDesign
        style={estilos.icone}
        onPress={() => navigation.navigate('CadastroScreen')}
        name="pluscircle"
        size={40}
        color="#00FF00"
      />
    </View>
    </View>
  )
}
const estilos= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black'
  },
  textos:{
    color: 'white'
  }, contIcon: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16,
  },
  icone: {
    marginBottom: 16,
    marginRight: 16,
  },
});