import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home';
import Lista from "./src/pages/Lista";
import FormAvaliacao from "./src/pages/FormAvaliacao";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Lista' component={Lista} />
        <Stack.Screen name='FormAvaliacao' component={FormAvaliacao} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};