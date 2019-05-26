import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styled from "@emotion/native";
import { NavigationTransitionProps } from "react-navigation";

const Container = styled.Text`
  color: rebeccapurple;
  font-size: 20px;
`;

export class App extends Component<NavigationTransitionProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Container>Tammy's yarn app</Container>
        <Button onPress={() => this.props.navigation.navigate("ColorSelector")} title="Get started"/>
        <Button onPress={() => this.props.navigation.navigate("StripeCreator")} title="Create stripe" />
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
