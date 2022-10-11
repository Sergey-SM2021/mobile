import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from "./src/components/screens/Main/Main";
import {Hello} from "./src/components/screens/Hello/Hellow";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const Stack = createNativeStackNavigator()

const queryClient = new QueryClient()

export default function App() {
    return (<QueryClientProvider client={queryClient}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HelloScreen"} screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Hello"} component={Hello}/>
                <Stack.Screen name={"Main"} component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
    </QueryClientProvider>)
}