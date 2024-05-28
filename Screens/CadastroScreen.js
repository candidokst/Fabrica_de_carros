import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textos}>Olá mundo</Text>
      <Pressable /*onPress para adicionar a foto*/ style={estilos.botao}>
        <Text style={estilos.textos}>Escolher foto</Text>
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
    color: 'white',
    textAlign: 'center'
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
});
