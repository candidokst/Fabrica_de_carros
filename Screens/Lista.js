import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

export default function ListaScreen() {
  const carros = [
    {
      foto: 'https://lh6.googleusercontent.com/proxy/28LhFx4KWUk-XXd4WeSbpmssd7HzMogWq1WdvnPxxpmZSN1zOrzNPTe9uP7ivTH9b3SS-EhYAtMe8w1glvkCGuk_XQeMKNRp1JMqMbKcNr_R9TEW8alkQBpqNx4rYLGlh5Lsd4AxVw9IX2b8mW2moA-zOQ',
      modelo: 'Sandero',
      marca: 'Renault',
      ano: '2015',
      status: '',
    },
  ];
  return (
    <View style={estilos.container}>
      <Text style={estilos.textos}>Ola mundo</Text>
      <FlatList
        data={carros}
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
    justifyContent: 'center'  
    },
  status: {
    color: '#FE8300',
     marginBottom:5,

  },
  modelo: {
    color: 'white',
    marginBottom:5,
  },
  marca: {
    color: 'white',
    marginBottom:5,

  },
  ano: {
    color: '#00FF00',
     marginBottom:5,

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
    marginLeft: '5%'
  },
  foto: {
    height: 180,
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  txtItens:{
    margin: 10,
  }
});
