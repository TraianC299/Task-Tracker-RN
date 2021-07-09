import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import {BigHeading,  SmallHeading, Paragraph} from "../Styles/Styles"
import {StatusBar, Text, SafeAreaView, TextInput, StyleSheet, View, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, Button} from 'react-native'
import Task from '../Components/Task';
import { Header, useHeaderHeight } from 'react-navigation-stack';
import { BlurView } from 'expo-blur';


export const Container=styled.View`
    background-color: #f2f2f2;
    flex: 1;  
    flex-direction: column;
    padding: 5%;
    padding-top: 10%;
`


function WelcomePage({navigation}) {

  const [task, setTask] = useState("")
  const [taskItems, setTaskItems] = useState(["ddddd"])

  const handleAddTask = () =>{
    Keyboard.dismiss()
    setTaskItems(previous=>[...previous, task])
    console.log(taskItems)
    setTask(null)
  }

  const completeTask = (index)=>{
    let ItemsCopy= [...taskItems]
    ItemsCopy.splice(index, 1)
    setTaskItems(ItemsCopy)
  }
    return (
        <Container>

                <BigHeading style={styles.text}>Tasks</BigHeading>
                <View style={styles.tasks}>

                {taskItems.map((element, index)=>{
                  return  (

                    <Task onPress={()=>completeTask(index)} key={index} text={element}/>
                 )
                })}
                <Button onPress={()=>navigation.navigate("Test")} title="Press"></Button>
                <Button onPress={()=>navigation.navigate("Animation")} title="Animation"></Button>
                </View>
                
                <KeyboardAvoidingView
                keyboardVerticalOffset = {Header.HEIGHT }
                behavior={Platform.OS==="ios" ? "padding": "height"}
                style={styles.addTaskWrapper}>
                  <BlurView tint="light" intensity={80} style={[styles.blurredContent]  }>
                  <TextInput placeholderTextColor="#fff" onChangeText={(text)=>{setTask(text)}} value={task} style={styles.input} placeholder={"Write a Task"}></TextInput>
                  <TouchableOpacity onPress={handleAddTask}>
                    <View  style={styles.addWrapper}><Text style={styles.addText}>+</Text></View>
                    
                  </TouchableOpacity></BlurView>
                </KeyboardAvoidingView>
          </Container>


    );
}

const styles = StyleSheet.create({
  blurredContent:{
    flexDirection: "row", 
    paddingVertical: 25, 
    width: "106%", 
    justifyContent: "space-around"
  },
  addTaskWrapper:{
    position: "absolute",
    paddingVertical: 20,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addWrapper:{
    width: 50,
    height: 50,
    backgroundColor: "#00D870",
    borderRadius: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addText:{
    alignSelf: "center",
    fontSize: 30,
    color: "white",
  },
  input:{
    padding: 15,
    width: "70%",
    backgroundColor: "#00D870",
    borderRadius: 60,
    color: "white",
  },
  text:{
    marginTop: 20, 
    color: "black"
  },
    tasks:{
      marginTop: 30
    }
  });

export default WelcomePage;