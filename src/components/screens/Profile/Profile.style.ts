import {StyleSheet} from "react-native"

export const style = StyleSheet.create({
    content: {
        padding: 20,
        paddingTop: 30,
    },
    text:{
        color: "white",
    },
    avatar: {
        borderRadius: 100,
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        opacity: 1
    },
    header: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
    status: {
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        height: "50%",
        flex: 1
    },
    posts: {
        paddingTop: 20
    },
    inputPost:{
        backgroundColor: "rgba(171,200,204,0.68)",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    addPost:{
        marginRight: 10,
        width: 50,
        height: 50
    },
    addPostContainer: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        width: "100%",
    }
})