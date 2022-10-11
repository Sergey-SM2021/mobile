import {Button, Image, Text, TouchableHighlight, View} from "react-native";
import {style} from "./Footer.style.ts";
import {INavigation} from "../../../Types/common";

const profile = "https://cdn-icons-png.flaticon.com/512/2102/2102647.png"

const mess = "https://cdn-icons-png.flaticon.com/512/3062/3062634.png"

const settings = "https://cdn-icons-png.flaticon.com/512/3291/3291598.png"

interface TProps extends INavigation {

}

export const Footer = ({navigation}: TProps) => {
    const handlerProfile = () => {
        navigation.navigate("Profile")
    }
    const handlerMessages = () => {
        navigation.navigate("Index")
    }
    return (<View style={style.wrapper}>
        <View style={style.inner}>
            <View>
                <TouchableHighlight underlayColor={'transparent'} onPress={handlerProfile}>
                    <Image source={{uri: profile}} style={style.icon}/>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight underlayColor={'transparent'} onPress={handlerMessages}>
                    <Image source={{uri: mess}} style={style.icon}/>
                </TouchableHighlight>
            </View>
            <View>
                <Image source={{uri: settings}} style={style.icon}/>
            </View>
        </View>
    </View>)
}