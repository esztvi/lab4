import { StatusBar } from 'expo-status-bar';
import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
 

export const ViewDetailsScreen = (props) => {
  const contact = props.route.params.contactObject;
  return (
    <View style = {styles.container}>
      <Image 
      style= {{height:200, width: 200}}
      source= {{uri: contact.picture.large}}
       />
      <Text style = {styles.listItem}>Title: {contact.name.title}</Text>
      <Text style = {styles.listItem}>First name: {contact.name.first}</Text>
      <Text style = {styles.listItem}>Last name: {contact.name.last}</Text>
      <Text style = {styles.listItem}>Age: {contact.dob.age}</Text>
    </View>

  ); 
}; 
 const styles= StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "rgb(82,46,145)",
     alignItems: "center",
     justifyContent: "center",
     padding: 20,
  }, 
  listItem: {
flexDirection: "row",
width:250,
justifyContent: "space-between",
padding: 2,
backgroundColor: "rbg(255)",
borderColor: "lavender",
borderWidth: 2,
marginVertical: 2,
  },
}); 
