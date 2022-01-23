import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput } from 'react-native';
import { View } from '../components/Themed';
import { TodoItem } from '../components/TodoItem';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([{
    id : '1',
    content : 'Breakfast',
    isCompleted : true
  },{
    id : '2',
    content : 'React Native Study',
    isCompleted : true
  },
  {
    id : '3',
    content : 'App Development',
    isCompleted : false
  },
  {
    id : '4',
    content : 'Order Food',
    isCompleted : false
  },
  {
    id : '5',
    content : 'Watch Cricket',
    isCompleted : false
  },
  {
    id : '6',
    content : 'Dinner',
    isCompleted : false
  }])
  const createNewToDo = (index: number)=>{
    const newTodos = [...todos];
    newTodos.splice(index, 0,{
      id:'7',
      content: '',
      isCompleted:false
    })
    setTodos(newTodos)
  }
  return (
    // <KeyboardAvoidingView 
    //   behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    //   >
        <View style={styles.container}>
            <TextInput 
            style={styles.title} 
            value={title}
            placeholder={"title"}
            onChangeText={setTitle}
          />
          <FlatList
            data={todos}
            renderItem={({item, index})=><TodoItem todo = {item} onSubmit = {()=>createNewToDo(index+1)}/>}
            style={{width:'100%'}}
          />
        </View>
      
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:12  
  },
  title: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  }
});
