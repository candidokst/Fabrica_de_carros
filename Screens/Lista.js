import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EvilIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export default function ListaScreen() {
  const [carros, setCarros] = useState([])
  const isFocused = useIsFocused()

 useEffect(() => {
    isFocused && buscarCarro();
  }, [isFocused])
 
  //Função para carregar itens
  const buscarCarro = async () => {
      const jsonValue = await AsyncStorage.getItem('@carro');
      const carros = jsonValue != null ? JSON.parse(jsonValue) : [];
      setCarros(carros);
  }
  //Função para carregar itens

  //Função de troca de status
  const mudarStatus = (index) => {
    const novosCarros = [...carros];
    if (novosCarros[index].status == 'A confirmar') {
      novosCarros[index].status = 'Em Produção';
    } else if (novosCarros[index].status == 'Em Produção') {
      novosCarros[index].status = 'Finalizado';
    }
    setCarros(novosCarros);
    AsyncStorage.setItem('@carro', JSON.stringify(novosCarros));
  }
  //Função de troca de status

  //Limpar item especifico da produção
  const eliminarItem = async (index) => {
      const novosCarros = [...carros]
      novosCarros.splice(index, 1)
      setCarros(novosCarros)
      await AsyncStorage.setItem('@carro', JSON.stringify(novosCarros))
  }
  //Limpar item especifico da produção

  //Troca de Botão
  const toggleElement = (index) => {
    const novosCarros = [...carros];
    if(!novosCarros[index].showText){
      novosCarros[index].showText = !novosCarros[index].showText
    }
    else if(!novosCarros[index].encerrado){
      novosCarros[index].encerrado = !novosCarros[index].encerrado
    }
    setCarros(novosCarros);
  };
  //Troca de Botão
  
  return (
    <View style={estilos.container}>
      <Text style={{marginBottom: 10}}></Text>
      <FlatList
        data={carros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={estilos.contItens}>
            <Image style={estilos.foto} source={{ uri: item.foto }} />
            <View style={estilos.txtItens}>
              <Text style={estilos.modelo}>Modelo: {item.modelo}</Text>
              <Text style={estilos.marca}>Fabricante: {item.marca}</Text>
              <Text style={estilos.ano}>Ano: {item.ano}</Text>
              <Text style={estilos.status}>Status: {item.status}</Text>
              <View style={estilos.container1}>
                {item.encerrado ? (
                  <TouchableOpacity style={estilos.botao} disabled>
                    <Text style={{fontWeight: 'bold'}}>Processo Finalizado</Text>
                  </TouchableOpacity>
                ) : (
                  item.showText ? (
                    <TouchableOpacity style={estilos.botao} onPress={() => {toggleElement(index); mudarStatus(index);}}>
                      <Text style={{fontWeight: 'bold'}}>Finalizar Produção</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={estilos.botao} onPress={() => {toggleElement(index); mudarStatus(index);}}>
                      <Text style={{fontWeight: 'bold'}}>Iniciar Produção</Text>
                    </TouchableOpacity>
                  )
                )}
                <Pressable onPress={() => eliminarItem(index)}>
                  <EvilIcons name="trash" size={40} color="gray" />
                </Pressable>
              </View>
            </View>
          </View>
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
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
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
