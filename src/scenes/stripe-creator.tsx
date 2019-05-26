import React from "react";
import { View, Text, Button } from "react-native";
import styled from "@emotion/native";


const Container = styled.View`
    flex: 1;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 30px;
`;

export const StripeCreator: React.FC = () => (
    <Container>
        <Title>Stripe Creator</Title>
    </Container>
);
