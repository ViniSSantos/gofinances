import React, { useState } from "react";
import { Modal } from 'react-native';

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

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
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    function handTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
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
                    <CategorySelectButton 
                        title="Categoria" 
                        onPress={handleOpenSelectCategoryModal}    
                    />
                </Fields>

                <Button title="Enviar" />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>

    );
}