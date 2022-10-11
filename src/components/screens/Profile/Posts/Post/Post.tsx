import {Image, Text, View} from "react-native";
import {style} from "./Post.style";

interface TProps{
    value: string;
}

const close = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"

export const Post = ({value}:TProps) => {
    return (<View style={style.wrapper}>
        <Text style={style.postText}>
            {value}
        </Text>
    </View>)
}