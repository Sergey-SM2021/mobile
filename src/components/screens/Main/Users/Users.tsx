import {FlatList, Image, ImageBackground, ScrollView} from "react-native";
import {style} from "../Main.style";
import {User} from "./User/User";
import {users} from "../../../../api/users";
import {useQuery} from "@tanstack/react-query";

const bg = "https://i.pinimg.com/736x/dd/d7/98/ddd79889393c799c6b7e785d6cddcf8a--assassins-creed-hd-wallpaper.jpg"

export const Users = () => {
    const {data,error,isLoading} = useQuery(['users'], ()=> users())
    return (<ImageBackground style={{flex: 1}} source={{uri: bg}}>
        <ScrollView>
            <FlatList style={style.list} data={data} renderItem={({item}) => <User {...item}/>}/>
        </ScrollView>
    </ImageBackground>)
}