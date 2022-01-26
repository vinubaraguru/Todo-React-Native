import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';


const SIGN_UP_MUTATION = gql`
mutation signIn($email: String!,$password: String!){
  signIn(input:{email: $email, password: $password}){
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

const SignInScreen = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigation  = useNavigation();

 
 const [signUp, {data, error, loading}] = useMutation(SIGN_UP_MUTATION)

 useEffect(() => {
    if(error){
        Alert.alert('Error in processing, please try again');
    }
   
    if(data){
        AsyncStorage.setItem('token', data.signIn.token)
     .then(()=>{
        navigation.navigate('Home');
     })
    }
   
    
 }, [error]);

 const onSubmit = () =>{
    signUp({variables : {name, email, password}})
 }
 
  return (
    <View style={styles.container}>
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
                marginTop: 30,
            }}>
            <Text style={{
                color: 'white',
                fontSize:18,
                fontWeight: 'bold'
            }}>Sign In</Text>
        </Pressable>
        <Pressable 
            onPress={()=> navigation.navigate('SignUpScreen')} 
            style={{ 
                backgroundColor : '#e33062', 
                height:50,
                borderRadius:5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>
            <Text style={{
                color: 'white',
                fontSize:18,
                fontWeight: 'bold'
            }}>Sign Up</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding:12  
    }
  });

export default SignInScreen;
