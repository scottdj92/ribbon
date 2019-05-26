import React from "react";
import { TouchableHighlight, View, Switch, Text } from "react-native";
import styled from "@emotion/native";

const Wrapper = styled.View`
    color: ${({ color }) => color};
`;

type Props = {
    color: string;
    onPress: () => void;
};

export const YarnColorButton: React.FC<Props> = ({ color, onPress, children }) => (
    <TouchableHighlight>
        <Wrapper color={color}>
            <Switch onValueChange={onPress} />
            <Text>{children}</Text>
        </Wrapper>
    </TouchableHighlight>
);
