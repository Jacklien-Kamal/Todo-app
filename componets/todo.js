import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddTodo from './addTodo';
import ListTodo from './listTodo';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0); // To generate unique ids

  const submitHandle = value => {
    setTodos(prevTodos => {
      const newTodo = {
        id: idCounter,
        value: value,
        completed: false // Default completion status
      };
      setIdCounter(prevIdCounter => prevIdCounter + 1); // Increment id counter
      return [newTodo, ...prevTodos];
    });
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id, completed) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  };

  return (
    
    <View style={styles.container}>
          <View style={{fontSize:38, marginBottom:100,backgroundColor:'#1aa3ff',width:300, padding:20, alignItems:'center', justifyContent:'center', color:'white', height:150, borderRadius:5}}> ToDo App</View>

      <AddTodo submitHandle={submitHandle} />
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => <ListTodo item={item} onDelete={() => deleteTodo(item.id)} onToggleComplete={toggleComplete}  />}
        keyExtractor={item => item.id.toString()} // Unique key for each item
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignContent:'center',
width:'50%',
    backgroundColor: '#fff',
    padding: 20,
  },
  list: {
    marginTop: 20,
    borderWidth:1,
    borderColor:"blue"
  },
});
