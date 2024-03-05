import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandle }) {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    submitHandle(todoText);
    setTodoText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your todo"
        onChangeText={text => setTodoText(text)}
        value={todoText}
        style={{marginBottom:20 ,borderWidth:1, borderRadius:4 , padding:5, }}
      />
      <Button  title="Add Todo +" onPress={handleAddTodo} />
    </View>
  );
}
