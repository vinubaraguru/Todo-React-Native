import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer:{
      width: 40,
      height: 40,
      alignItems:'center',
      borderRadius:5,
      backgroundColor:'#404040',
      marginRight:10
    },
    root:{
      flexDirection:'row',
      width: '100%',
      padding: 10,
    },
    title:{
      fontSize:20,
      marginRight:10,
    },
    time:{
      color: 'darkgrey',
    }
  });

  export default styles;