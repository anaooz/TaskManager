import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MyModal from '../screens/MyModal'
import Timer from '../screens/Timer'

const Stack = createStackNavigator();

export default function Routes() {
  return(
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
    <Stack.Screen name="Timer" component={Timer} options={{ headerShown: false}}/>
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="MyModal" component={MyModal} options={{ presentation: 'transparentModal', headerShown: false }}/>
    </Stack.Group>
  </Stack.Navigator>
  )
}