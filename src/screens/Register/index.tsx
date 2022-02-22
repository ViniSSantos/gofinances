import React from "react";

import { Input } from "../../components/Forms/Input";

import {
    Container,
    Header,
    Title,
    Form,

} from './styled';

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastros</Title>
            </Header>
            <Form>
                <Input
                    placeholder="Nome"
                />
                <Input
                    placeholder="Preço"
                />
            </Form>
        </Container>

    );
}