import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListaScreen() {
  const [carros, setCarros] = useState([]);

  const buscarCarro = async () => {
    const carros = JSON.parse(await AsyncStorage.getItem('@carro')) || [];
  };
// AsyncStorage.clear();
  useEffect(() => {
    buscarCarro();
  }, []);
}


  return (
    <View style={estilos.container}>
      <Text style={estilos.textos}>Ola mundo</Text>
      <FlatList
        data={carros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <View style={estilos.contItens}>
              <Image style={estilos.foto} source={{ uri: item.foto }} />
              <View style={estilos.txtItens}>
                <Text style={estilos.modelo}>Modelo: {item.modelo}</Text>
                <Text style={estilos.marca}>Fabricante: {item.marca}</Text>
                <Text style={estilos.ano}>Ano: {item.ano}</Text>
                <Text style={estilos.status}>Status:{item.status}</Text>
                <Pressable style={estilos.botao}>
                  <Text>Mudar Status</Text>
                </Pressable>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  status: {
    color: '#FE8300',
    marginBottom: 5,
  },
  modelo: {
    color: 'white',
    marginBottom: 5,
  },
  marca: {
    color: 'white',
    marginBottom: 5,
  },
  ano: {
    color: '#00FF00',
    marginBottom: 5,
  },
  botao: {
    backgroundColor: '#00FF00',
    padding: 4,
    width: 190,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  contItens: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginLeft: '5%',
    marginBottom: 10,
  },
  foto: {
    height: 180,
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  txtItens: {
    margin: 10,
  },
});
