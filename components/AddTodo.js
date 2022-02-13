import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import TodoList from './TodoList';

const initialData = [
    //id, title, status
    { id: 1, title: 'Learn React Native', status: false },
    { id: 2, title: 'Learn Flutter', status: false },
    { id: 3, title: 'Learn Dotnet', status: false },
]

const AddTodo = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState(initialData);

    const addTodo = (text) => {
        if (text === '') {
            return alert('You have enteered an empty Todo! Kindly enter a valid Todo.');
        }
        const newTodo = {
            id: data.length + 1,
            title: text,
            status: false
        }
        setData([...data, newTodo]);
        setText('');
    }

    const deleteTodo = (id) => {
        setData(data.filter(todo => todo.id !== id));
    }
    return (
        <View>
            <TextInput
                placeholder='Enter your Todo'
                style={styles.input}
                onChangeText={(text) => setText(text)
                }
                value={text}
            />
            <CustomButton title='Add Todo' pressHandle={() => addTodo(text)} />
            <TodoList todolist={data} deleteTodo={deleteTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})
export default AddTodo;
