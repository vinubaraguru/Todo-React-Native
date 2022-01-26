import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = () => {

    const navigation = useNavigation();
 
  useEffect(() => {
      const checkUser = async() =>{
        if(await isAuthenticated()){
            navigation.navigate('Home');
        } else{
            navigation.navigate('SignInScreen')
        }
      }
      checkUser();
  }, []);

  const isAuthenticated = async() =>{
      const token = AsyncStorage.getItem('token');
      return !!token;
  }
  return (
    <View style={{backgroundColor: 'white', flex:1, justifyContent:'center'}}>
        <ActivityIndicator/>
    </View>
  );
};

export default SplashScreen;
