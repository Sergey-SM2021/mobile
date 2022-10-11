import {
    Alert,
    Button,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {style} from "./Profile.style.ts";
import {Post} from "./Posts/Post/Post";
import {SyntheticEvent, useState} from "react";

const bg = "https://i.pinimg.com/originals/15/16/f8/1516f84ea09f664b24cd572e171daa3c.jpg"

const confirm = "https://cdn-icons-png.flaticon.com/512/8637/8637552.png"

const avatar = "https://cdn-icons-png.flaticon.com/512/924/924915.png"

export const Profile = () => {
    const [posts, setPosts] = useState([
        {id: "0", value: "Мой первый пост"}
    ])
    const [newPost, setNewPost] = useState("")
    const handlerPosting = (e:SyntheticEvent) => {
        setNewPost((e.currentTarget as HTMLInputElement).value)
    }
    return (
        <ImageBackground style={{flex: 1}} source={{uri: bg}}>
            <ScrollView>
                <View style={style.content}>
                    <View style={style.header}>
                        <View style={style.avatar}>
                            <Image source={{uri: avatar}} style={style.avatar}/>
                        </View>
                        <View style={style.status}>
                            <TextInput style={style.status} value={"Я в моменте"}/>
                        </View>
                    </View>
                    <FlatList data={posts} style={style.posts} renderItem={({item}) => <Post {...item}/>}/>
                    <TextInput placeholder={"Введите сообщение"} onChange={handlerPosting} multiline={true} style={style.inputPost}/>
                    <View style={style.addPostContainer}>
                        <Image source={{uri: confirm}} style={style.addPost}/>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>)
}