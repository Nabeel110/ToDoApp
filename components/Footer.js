import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.text}>Copyrights Nabeel Ahmed -2022</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: "100%",
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500'

    }
})

export default Footer;
