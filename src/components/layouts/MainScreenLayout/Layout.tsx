import {View, ImageBackground} from "react-native";
import {style} from "./Layout.style.ts";
import {PropsWithChildren} from "react";

const bg = "https://i.pinimg.com/originals/aa/a9/b9/aaa9b98a194466e75f9e151b88dbfa72.jpg"

export const Layout = ({children}:PropsWithChildren) => {
    return <ImageBackground source={{uri:bg}} style={style.bg}>
        <View style={style.content}>{children}</View>
    </ImageBackground>
}