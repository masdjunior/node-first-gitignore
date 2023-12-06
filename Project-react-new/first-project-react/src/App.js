import React from 'react'

import {
    Container,
    H1,
    Image,
    ContainerItens,
    InputLabel,
    Input,
    Button,
} from "./styles";

// JSX //

function App() {

    return (

        <Container>

            <Image />
            <ContainerItens>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input placeholder="Nome" />

                <Button>Cadastrar</Button>

            </ContainerItens>

        </Container>
    );

}

export default App;