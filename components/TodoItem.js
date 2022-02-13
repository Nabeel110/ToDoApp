import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const TodoItem = ({ item, deleteTodo }) => {

    const [isCompleted, setIsCompleted] = useState(item.status);
    // console.log(item)
    return (
        <View style={styles.todoItemContainer}>
            {/* Checkbox */}
            <BouncyCheckbox
                size={25}
                fillColor="green"
                unfillColor="#FFFFFF"
                // text="Custom Checkbox"
                iconStyle={{ borderColor: "green" }}
                onPress={() => setIsCompleted(!isCompleted)}
            />
            {/* //Text */}
            <Text style={isCompleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }} t>{item.title}</Text>
            {/* //Delete Icon */}
            <Icon
                name='delete'
                size={25}
                color={'red'}
                onPress={() => deleteTodo(item.id)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    todoItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 15,
    }
})

export default TodoItem;
