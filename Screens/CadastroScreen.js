import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Vibration,
  TouchableOpacity
} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {

  //Criação do objeto que sera o storage
  const [carro, setCarro] = useState({
    modelo: '',
    marca: '',
    foto: null,
    ano: 'Ano',
    status: 'A confirmar'
  });
  //Criação do objeto que sera o storage

  //Função para escolher imagem do armazenamento(Permissão não necessária)
  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setCarro({ ...carro, foto: result.assets[0].uri });
    }
  }
  //Função para escolher imagem do armazenamento(Permissão não necessária)

  //Função para envio de informações ao storage
  const cadastrarCarro = async () => {
    if(carro.modelo===''|| carro.marca===""|| carro.foto=== null || carro.ano===0){
      alert("Preencha todos os dados corretamente")

    }else{
    const novoCarro = { ...carro };
      let carros = JSON.parse(await AsyncStorage.getItem('@carro'));
      if (!carros) {
        carros = [novoCarro];
      } else {
        carros.unshift(novoCarro);
      }
      await AsyncStorage.setItem('@carro', JSON.stringify(carros));
      Vibration.vibrate();
      navigation.navigate('Home');
    }
  };
  //Função para envio de informações ao storage

  return (
    <View style={estilos.container}>
      {carro.foto ? (
        <Image style={estilos.foto} source={{ uri: carro.foto }} />
      ) : (
        <TouchableOpacity style={estilos.botao} onPress={escolherImagem}>
          <Text style={estilos.textos}>Escolher foto</Text>
        </TouchableOpacity>
      )}
        <Text style={estilos.textos}>Escolher foto</Text>
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
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
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
    width: "100%",
    height: 280,
    marginBottom: 10,
  },
});
