import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  PermissionsAndroid,
} from "react-native";
import Tuner from "./tuner";
import Note from "./note";
import Meter from "./meter";


export default class App extends Component {
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
  };

  _update(note) {
    this.setState({ note });
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }

    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  render() {
    return (
             
    <View style={style.body}>
      <ImageBackground
        source={require("../static/img/diapa-psicodelic-fix.png")}
        style={style.image}>
          
        <StatusBar backgroundColor="#000" translucent />
        <Meter cents={this.state.note.cents} style={style.Meter}/>
        <Note {...this.state.note} />
      
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>
      </ImageBackground>
    </View>
      
      
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  frequency: {
    fontSize: 28,
    color: "#121212",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 200,
    height: 300,
    marginVertical: 230,
  },
  note: {
    marginVertical: 540,
  }
  
});
