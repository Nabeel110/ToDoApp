import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = ({ title, pressHandle }) => {

    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
                onPress={pressHandle}
                style={styles.btn}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginVertical: 20,
        marginHorizontal: 40
    },
    btn: {
        backgroundColor: 'lightgreen',
        height: 30,
        borderRadius: 10,
    },
    counter: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default CustomButton
