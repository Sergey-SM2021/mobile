import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1d1d62',
        padding: 10,
        width: "100%",
        height: 100,
    },
    inner: {
        height: "100%",
        backgroundColor: '#c375c7',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: "rgb(49,203,236)",
        borderRadius: 100,
    }
})