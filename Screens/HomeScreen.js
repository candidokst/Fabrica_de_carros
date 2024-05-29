import {Text, View, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


export default function HomeScreen({navigation}){
  
  return(
    <View style={estilos.container}>
    <Text style={estilos.textos}>
    Controle de produção:
    </Text>
    <View style={estilos.contIcon}>
        <AntDesign
        style={estilos.icone}
        onPress={() => navigation.navigate('Cadastroscreen')}
        name="pluscircle"
        size={40}
        color="#00FF00"
      />
      </View>
    <View style={estilos.legenda}>
      <View>
        <View style={estilos.roxo}></View>
        <View style={estilos.amarelo}></View>
        <View style={estilos.verde}></View>
      </View>
      <View>
        <Text style={estilos.texto}>Produzidos</Text>
        <Text style={estilos.texto}>Produção</Text>
        <Text style={estilos.texto}>Espera</Text>
      </View>
    </View>
    <View style={estilos.nav}><Pressable onPress={() => navigation.navigate('ListaScreen')} style={estilos.list}><MaterialCommunityIcons name="newspaper-variant" size={36} color="white" /></Pressable></View>
    </View>
  )
}
const estilos= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black',
    padding: 20,
  },
  textos:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 300
  }, contIcon: {
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 10,
    bottom: 35,
    right: 20,
    padding: 1,
  },
  icone: {
    marginBottom: 16,
    marginRight: 16,
  },
  texto:{
    color: 'white',
    fontSize: 16,
    padding: 5,
    marginBottom: 2
  },
  roxo:{
    backgroundColor: 'rgb(121, 1, 255)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginBottom: 5
  },
  amarelo:{
    backgroundColor: 'rgb(245, 218, 1)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginBottom: 5
  },
  verde:{
    backgroundColor: 'rgb(1, 255, 21)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginBottom: 5
    
  },
  legenda:{
    flexDirection: 'row'
  },
  nav:{
    backgroundColor: '#00FF00',
    width: '100vw',
    height: 40,
    zIndex: 10,
    position: 'absolute',
    bottom:0,
    right: 0
  },
  list:{
    position: 'aboslute',
    left: 150
  }
});