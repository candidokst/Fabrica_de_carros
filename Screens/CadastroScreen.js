import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Vibration,
} from 'react-native';

import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  
  // useEffect(() => {
  //    AsyncStorage.clear(); 
  // }, []);

  const [carro, setCarro] = useState({
    modelo: '',
    marca: '',
    foto: null,
    ano: 0,
  });

  // -------------- // Criando a função pra escolher a foto // -------------- //

  const escolherImagem = async () => {
    // Permissões não são necessárias para abrir a biblioteca de fotos.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setCarro({ ...carro, foto: result.assets[0].uri });
    }
  };

  const cadastrarCarro = async () => {
    const novoCarro = { ...carro };
    try {
      let carros = JSON.parse(await AsyncStorage.getItem('@carro'));
      if (!carros) {
        carros = [novoCarro];
      } else {
        carros.unshift(novoCarro);
      }
      await AsyncStorage.setItem('@carro', JSON.stringify(carros));
      console.log('Salvou!!');
      Vibration.vibrate();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(carro);

  //-----------------------------------------------------

  return (
    <View style={estilos.container}>
      <Pressable onPress={escolherImagem} style={estilos.botao}>
        <Text style={estilos.textos}>Escolher foto</Text>
      </Pressable>
      {carro.foto && <Image style={estilos.foto} source={{ uri: carro.foto }} />}
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Modelo"
        value={carro.modelo}
        onChangeText={(text) => setCarro({ ...carro, modelo: text })}
      />
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Marca"
        value={carro.marca}
        onChangeText={(text) => setCarro({ ...carro, marca: text })}
      />
      <TextInput
        placeholderTextColor="#000"
        fontWeight="bold"
        style={estilos.input}
        placeholder="Ano"
        keyboardType="numeric"
        value={carro.ano.toString()}
        onChangeText={(text) => setCarro({ ...carro, ano: parseInt(text) })}
      />
      <View style={estilos.footer}>
        <Pressable
          style={estilos.botaoFinal}
          onPress={cadastrarCarro}
        >
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
    color: 'white',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#00FF00',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
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
  foto: {
    width: 280,
    height: 280,
    borderRadius: 4,
    marginBottom: 10
  },
});
