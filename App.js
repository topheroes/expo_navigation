import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, ToastAndroid, Button, TextInput, AsyncStorage } from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';



const NotYoursNavigator = createBottomTabNavigator( {
      Home: { 
          screen: App,
          title: 'App',
          navigationOptions:{tabBarIcon: <Image source={require("./icon-people.png")}   style={{ width : 32, height : 32}}  />}

      },
      About: {
        screen: About,
        title: "About"

      }

    },
    {navigationOptions:{
      initialRouteName : "About"
    } }

);


function About(){
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <View style={styles.container}>

    <Text> Hoho</Text>

    </View>
  )
}

 function App() {
  
  const [value, setValue] = useState('');

  


  const showMessage = async (message)=>{

    const savedValue = await AsyncStorage.getItem("sereja_serditso_opyat");
    await AsyncStorage.setItem("sereja_serditso_opyat", savedValue+' '+message );

    ToastAndroid.showWithGravity(savedValue||'oyhehe',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER)

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.input}><TextInput value={value} onChangeText={ (text)=>{setValue(text)} } placeholderTextColor="red" placeholder="type here"/></View>
      <Button title="hello" onPress={()=>{showMessage(value)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: 'lightblue',
    color: "red",
    borderRadius: 4
  }
});

export default createAppContainer(NotYoursNavigator);

