import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CadastroScreen({ navigation }) {

    const [foto, setFoto]= useState(null)
  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };
  return (
    <View style={estilos.container}>
     <Image
        style={estilos.foto}
        source={{
          uri: foto,
        }}
      />
      <Pressable onPress={escolherImagem} style={estilos.botao}>
        <Text style={estilos.textos}>Insira a imagem do veículo</Text>
      </Pressable>
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Modelo"
      />
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Marca"
      />
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Ano"
        keyboardType="numeric"
      />
      <View style={estilos.footer}>
        <Pressable
          onPress={() => navigation.navigate('ListaScreen')}
          style={estilos.botaoFinal}>
          <Text style={estilos.textos}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textos: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100vw'
  },
  botao: {
    backgroundColor: 'lightgray',
    padding: 80,
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  botaoFinal: {
    backgroundColor: '#00FF00',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
});
