import React from "react";
import { Text, Button, Alert, Switch } from "react-native";

export class Selector extends React.Component {
    public render() {
        return (
            <>
                <Text>Profile Page</Text>
                <Button title="Blue" onPress={() => this.launchAlert()}>Blue</Button>
                <Switch></Switch>
            </>
        );
    }

    private launchAlert() {
        Alert.alert("Color picked", "blue", [
            { text: "Cancel", onPress: () => console.log("cancelled"), style: "cancel"},
            { text: "Ok", onPress: () => console.log("Ok"), style: "default"},
        ]);
    }
}
