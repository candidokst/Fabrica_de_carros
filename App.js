import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen'
import CadastroScreen from './Screens/Cadastroscreen'
import ListaScreen from './components/Lista.js'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Dashboard',
            headerStyle: {
              backgroundColor: '#00FF00',
            },

            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Cadastroscreen"
          component={CadastroScreen}
          options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: '#00FF00',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListaScreen"
          component={ListaScreen}
          options={{
            title: 'Lista de carros',
            headerStyle: {
              backgroundColor: '#00FF00',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
