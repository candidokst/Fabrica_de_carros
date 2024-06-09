import {Text, View, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'
import {useEffect, useState} from 'react'



export default function HomeScreen({navigation}){
  const isFocused = useIsFocused()
  const [carros, setCarros] = useState([])
  
  useEffect(() => {
    //Função para carregar itens
    const buscarCarros = async () => {
        const carrosJSON = await AsyncStorage.getItem('@carro')
        if (carrosJSON) {
          setCarros(JSON.parse(carrosJSON));
        } else {
          setCarros([])
        }
      //Função para carregar itens
    }
    buscarCarros();
  }, [isFocused]);

//Função auxiliar do value, para separação de itens a partir do status
  const contarCarrosPorStatus = (status) => {
  return carros.filter(carro => carro.status === status).length;
}
//Função auxiliar do value, para separação de itens a partir do status

//Array com as informações das linhas
  const data = [
  { label: `${contarCarrosPorStatus('Finalizado')}`, value: contarCarrosPorStatus('Finalizado') },
  { label: `${contarCarrosPorStatus('Em Produção')}`, value: contarCarrosPorStatus('Em Produção') },
  { label: `${contarCarrosPorStatus('A confirmar')}`, value: contarCarrosPorStatus('A confirmar') },
];
//Array com as informações das linhas

  return(
    <View style={estilos.container}>
    <Text style={estilos.textos}>
    Controle de Produção
    </Text>
    <View style={estilos.container1}>
      {data.map((item, index) => (
        <View key={index} style={estilos.container2}>
          <View style={[estilos.bar, styles[index % styles.length], { width: item.value * 25 }]} />
          <Text style={estilos.label}>{item.label}</Text>
        </View>))}
    </View>
    <View style={estilos.contIcon}>
        <AntDesign
        style={estilos.icone}
        onPress={() => navigation.navigate('CadastroScreen')}
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
    <View style={estilos.nav}><Pressable onPress={() => navigation.navigate('ListaScreen')}><MaterialCommunityIcons name="newspaper-variant" size={36} color="white" /></Pressable></View>
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
    marginBottom: 10,
    fontWeight: 'bold'
  }, 
  contIcon: {
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 10,
    bottom: 65,
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
    marginBottom: 2,
    fontWeight: 'bold'
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
    alignItems: 'center',
    backgroundColor: '#00FF00',
    width: '111%',
    height: 50,
    zIndex: 10,
    position: 'absolute',
    bottom:0,
  },
  container1: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 5,
  },
  bar: {
    height: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  container2:{
    flexDirection: 'row'
  }
});

//estilo extra para logica das linhas
const styles = [
  { backgroundColor: 'rgb(121, 1, 255)' },
  { backgroundColor: 'rgb(245, 218, 1)' },
  { backgroundColor: 'rgb(1, 255, 21)' },
]
//estilo extra para logica das linhas