import React, { useState } from "react";

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,

} from './styled';

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type)
    }
 
    return (
        <Container>
            <Header>
                <Title>Cadastros</Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                    />
                    <TransactionsTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handTransactionsTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handTransactionsTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionsTypes>
                </Fields>

                <Button title="Enviar" />
            </Form>
        </Container>

    );
}