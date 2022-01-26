import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage'

import React, { useState } from 'react';
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';

const SIGN_UP_MUTATION = gql`
mutation signUp($email: String!,$password: String!, $name: String!){
  signUp(input:{email: $email, password: $password, name: $name}){
    token
    user{
      id
      name
      email
      avatar
    }
  }
}
`;


const SignUpScreen = () => {
 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [password, setPassword] = useState('');
 const navigation  = useNavigation();

 const [signUp, {data, error, loading}] = useMutation(SIGN_UP_MUTATION)

 if(error){
     Alert.alert('Error in processing, please try again');
 }

 if(data){
     AsyncStorage.setItem('token', data.signUp.token)
     .then(()=>{
        navigation.navigate('Home');
     })
 }

 const onSubmit = () =>{
    signUp({variables : {name, email, password}})
 }

  return (
    <View style={styles.container}>
         <TextInput
            placeholder='Name'
            value={name}
            onChangeText={setName}
            style={{
                color: 'black',
                fontSize: 18,
                width: '100%',
                marginVertical: 25,
            }}
        />
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={{
                color: 'black',
                fontSize: 18,
                width: '100%',
                marginVertical: 25,
            }}
        />
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
                color: 'black',
                fontSize: 18,
                width: '100%',
                marginVertical: 25,
            }}
        />
        <Pressable 
            onPress={onSubmit} 
            style={{ 
                backgroundColor : '#e33062', 
                height:50,
                borderRadius:5,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'row',
                marginTop: 30,
            }}>
            {loading && <ActivityIndicator/>}
            <Text style={{
                color: 'white',
                fontSize:18,
                fontWeight: 'bold'
            }}>Sign Up</Text>
        </Pressable>
        <Pressable
            disabled={loading}
            onPress={()=> navigation.navigate('SignInScreen')} 
            style={{ 
                backgroundColor : '#e33062', 
                height:50,
                borderRadius:5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>
            {loading && <ActivityIndicator/>}
            <Text style={{
                color: 'white',
                fontSize:18,
                fontWeight: 'bold'
            }}>Already have an account? Sign In</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding:12  
    }
  });

export default SignUpScreen;
