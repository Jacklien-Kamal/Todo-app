import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListTodo({ item, onDelete, onToggleComplete }) {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onToggleComplete(item.id, !completed);
  };

  return (
    <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{item.value}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleComplete}>
          <Text style={{ color: completed ? 'red' : 'white',borderRadius:4, padding:5 , marginLeft: 10,fontWeight:'bold', backgroundColor:'green' }}>{completed ? 'Undo' : 'Complete'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={{ color: 'white',backgroundColor:'red' , borderRadius:4, padding:5 , marginLeft: 10 }}>Delete -</Text>
        </TouchableOpacity>
      </View>
      
</View>
<hr width="600" hight="10" color='black'/>
    </View>
    
  );
}
