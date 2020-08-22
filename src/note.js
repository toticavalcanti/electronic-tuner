import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default class Note extends PureComponent {
  render() {
    return (
      <View style={style.note}>
        <Text style={style.name}>{this.props.name[0]}</Text>
        <Text style={style.sharp}>{this.props.name[1]}</Text>
        <Text style={style.octave}>{this.props.octave}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  note: {
    width: 100,
    height: 136,
    marginBottom: 10,
    marginTop: 180,
  },
  name: {
    marginTop:40,
    fontSize: 78,
    fontWeight: "300",
    color: "#121212",
    flexDirection: "row",
  },
  sharp: {
    fontSize: 42,
    color: "#121212",
    position: "absolute",
    left: 50,
    top: 82,
    ...Platform.select({
      ios: {
        top: 10,
        fontSize: 48,
      },
    }),
  },
  octave: {
    fontSize: 52,
    color: "#121212",
    position: "absolute",
    right: 0,
    bottom: 0,
    marginLeft: 70,
    marginTop: 50,
  },
});
