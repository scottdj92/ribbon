import React from "react";
import { TouchableHighlight, Button } from "react-native";
import styled from "@emotion/native";

type Props = {
    color: string;
    title: string;
    onPress: () => void;
};

export const YarnColorButton: React.FC<Props> = ({ color, onPress, title }) => (
    <TouchableHighlight>
        <Button title={title} onPress={onPress} color={color}/>
    </TouchableHighlight>
);
