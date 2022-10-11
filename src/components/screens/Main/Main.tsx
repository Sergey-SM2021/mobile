import {ImageBackground, ScrollView, View, FlatList} from "react-native";
import {style} from "./Main.style.ts";
import {Footer} from "../../layouts/Footer/Footer";
import {User} from "./Users/User/User";
import {INavigation} from "../../../Types/common";
import {data} from "./data";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Users} from "./Users/Users";
import {Profile} from "../Profile/Profile";

export const Stack = createNativeStackNavigator()

interface TProps extends INavigation {

}

export const Main = ({navigation}: TProps) => {
    return (
        <View style={style.wrapper}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={"Index"} component={Users }/>
                <Stack.Screen name={"Profile"} component={Profile}/>
            </Stack.Navigator>
            <Footer navigation={navigation}/>
        </View>
)
}