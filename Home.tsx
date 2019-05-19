import React from "react";
import { Component } from "react";
import {Platform, StyleSheet, Text, View, Button} from "react-native";
import styled from "@emotion/native";
import { NavigationTransitionProps } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

const Container = styled.Text`
  color: rebeccapurple;
  font-size: 20px;
`;

export class Home extends Component<NavigationTransitionProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Container>Tammy's yarn app</Container>
        <Button onPress={() => this.props.navigation.navigate("Selector")} title="Get started"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
