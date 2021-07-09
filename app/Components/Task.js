import React from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity} from 'react-native'
import { Paragraph } from '../Styles/Styles';

function Task({text, onPress}) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={onPress}><View style={styles.square}></View></TouchableOpacity>
                <Paragraph style={styles.text}>{text}</Paragraph>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#00D870",
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    itemLeft:{
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        opacity: 0.7,
    },
    square:{
        backgroundColor: "white",
        width: 24,
        height: 24,
        borderRadius: 5

},
    circular:{
        width: 14,
        height: 14,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 50
    },
    text:{
        marginLeft: 15,
        maxWidth: "80%",
        color: "white",
    }

})
export default Task;