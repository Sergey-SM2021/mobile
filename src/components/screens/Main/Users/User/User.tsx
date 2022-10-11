import {Image, Text, View} from "react-native";
import {style} from "./User.style";
import {IUser} from "../../../../../Types/entity";

export const User = ({name, avatar, status}: IUser) => {
    return <View style={style.wrapper}>
        <View>
            <Image source={{uri: avatar}} style={style.ava}/>
            <Text>{name}</Text>
        </View>
        <View style={style.status}>
            <Text>{status.length>20?status.slice(0,20)+"...":status}</Text>
        </View>
    </View>
}