import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/*
<div style={{}}>
</div>

props = {
    title:"app",
    name:"asdassa"
}

const {title, name} = props;

*/


const Header = ({ title, color }) => {
    return (
        <View style={[styles.header, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'lightblue',
        height: 60,
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 15
    }
})

export default Header


