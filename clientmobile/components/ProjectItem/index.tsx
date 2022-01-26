import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface projectItemProps {
    project :{ 
        id: string,
        title: string,
        createdAt: string
    }
}

const ProjectItem = ({project} : projectItemProps) => {
  const navigation  = useNavigation();
  const onPress = () =>{
      navigation.navigate('ToDoscreen')
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.root}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name='file-outline' size={24} color = 'grey'/>
        </View>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.time}>{project.createdAt}</Text>
      </View>
    </Pressable>
  );
};
export default ProjectItem;


