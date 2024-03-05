import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function DeleteTodo({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <TouchableOpacity onPress={handleDelete}>
      <Text style={{backgroundColor:"red",borderRadius:4 , padding:5, color:"white"}}>Delete -</Text>
    </TouchableOpacity>
  );
}
