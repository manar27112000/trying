import {useState} from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Button, TextInput,Image, ScrollView} from "react-native";
import SignIn from "./componants/SignIn";


export default function App() {

  return (
    <View style={styles.container}>
      
      <SignIn />
  
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin:5
  }
  
});
