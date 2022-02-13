import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todolist, deleteTodo }) => {
    // console.log(todolist)
    return (
        <View>
            {todolist.length !== 0 ? todolist.map((todo, index) => {
                return (<>

                    <TodoItem key={index} item={todo} deleteTodo={deleteTodo} />
                </>)
            }) : (
                <>
                    <Text style={styles.noTodoText}>No Todos Added yet :(.</Text>
                    <Text style={styles.noTodoText}>Please Add a todo</Text>
                </>
            )
            }
        </View>
    );
};


const styles = StyleSheet.create({
    noTodoText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "600"
    }
})
export default TodoList;
