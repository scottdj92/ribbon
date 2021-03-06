import React from "react";
import { Text, Alert, Switch } from "react-native";
import { YarnColorButton } from "../components";

type ButtonColor = {
    name: string;
    hex: string;
};

const colors: ButtonColor[] = [
    {
        name: "blue",
        hex: "blue",
    },
    {
        name: "purple",
        hex: "rebeccapurple",
    },
];

export class ColorSelector extends React.Component {
    public render() {
        return (
            <>
                <Text>Color Selector</Text>
                {
                    colors.map((color) => <YarnColorButton color={color.hex} onPress={() => this.launchAlert(color.hex)}>{color.name}</YarnColorButton>)
                }
            </>
        );
    }

    private launchAlert(color: string) {
        Alert.alert("Color picked", color, [
            { text: "Cancel", onPress: () => console.log("cancelled"), style: "cancel"},
            { text: "Ok", onPress: () => console.log("Ok"), style: "default"},
        ]);
    }
}
