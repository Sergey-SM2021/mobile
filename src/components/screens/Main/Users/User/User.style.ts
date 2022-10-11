import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "rgba(116,197,213,0.25)",
        padding: 15,
        borderRadius: 5
    },
    ava: {
        width: 50,
        height: 50
    },
    status: {
        marginLeft: 10,
        borderRadius: 5,
        padding: 5,
        flexGrow: 1,
        backgroundColor: "rgba(255,255,255,0.8)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})