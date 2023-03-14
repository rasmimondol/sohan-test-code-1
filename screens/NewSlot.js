import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
//import db from "../config";

export default class NewSlot extends Component {
  constructor()
  {
    super();
    this.state= {
      date: "",
      timeBegins: "",
      timeEnds: ""
    }
  }

  createNewSlot=async(date,timeBegins,timeEnds)=>
  {
    db.collection("host").add({
      available: true,
      date: date,
      endTime: timeEnds,
      startTime: timeBegins
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.android}/>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>
            Enter a new time slot
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <ScrollView>
            <TextInput 
              style={styles.inputFont}
              onChangeText = {(date)=>this.setState({date: date})}
              placeholder={"Date"}
              placeholderTextColor={"purple"}
            />
            <TextInput 
              style={styles.inputFont}
              onChangeText = {(timeBegins)=>this.setState({timeBegins: timeBegins})}
              placeholder={"Time Begins"}
              placeholderTextColor={"purple"}
            />
            <TextInput 
              style={styles.inputFont}
              onChangeText = {(timeEnds)=>this.setState({timeEnds: timeEnds})}
              placeholder={"Time Ends"}
              placeholderTextColor={"purple"}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "lavender"
  },
  android: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight: 0 //this will ensure that the screen gets 
  },                                                                 //accomodated for android
  appTitleTextContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitleText: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: "purple"
  },
  inputsContainer: {
    flex: 0.9
  },
  inputFont: {
    height: RFValue(60),
    marginTop: RFValue(70),
    borderColor: "purple",
    color: "purple",
    borderWidth: RFValue(4),
    borderRadius: RFValue(20),
    textAlign: "center",
    fontSize: RFValue(28),
    width: "80%",
    alignSelf: "center",
    backgroundColor: "lavenderblush"
  }
});