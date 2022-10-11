import {View, Text} from "react-native";
import {Layout} from "../../layouts/MainScreenLayout/Layout";
import {style} from "./Hellow.style.ts";
import {INavigation} from "../../../Types/common";

interface TProps extends INavigation{
    
}

export const Hello = ({navigation}:TProps) => {
    const MainPress = () => {
        navigation.navigate("Main")
    }
    return (<Layout>
        <View>
            <Text style={style.title}>A social network for gamers</Text>
            <Text style={style.link} onPress={MainPress}>Главная</Text>
        </View>
    </Layout>)
}