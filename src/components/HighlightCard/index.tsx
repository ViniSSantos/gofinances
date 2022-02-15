import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Foolter,
    Amount,
    LastTransaction, 

} from './styled';

export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Foolter>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
            </Foolter>

        </Container>
    )
}