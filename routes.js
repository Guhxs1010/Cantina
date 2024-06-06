import { createStackNavigator } from '@react-navigation/stack';
import index from './pages/index';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="index"
                component={index}                
                 />
        </Stack.Navigator>
        )
} 