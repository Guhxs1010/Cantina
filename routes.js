import { createStackNavigator } from '@react-navigation/stack';
import Index from './app/index';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                component={Index} />
        </Stack.Navigator>
    );
}
