import React from 'react'

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

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
    const users = [
        { id: Math.random(), name: "Rodolfo", age: 28 },
        { id: Math.random(), name: "Marcos", age: 35 },
    ];

    return (
        <Container>
            <Image alt='logo-imagem-People' src={People} />
            <ContainerItens>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input placeholder="Nome" />

                <Button>Cadastrar <img alt="seta" src={Arrow} /> </Button>
            <ul>
                {users.map((user) => (
                    <li>
                        {user.name} - {user.age}
                    </li>
                    ))}
            </ul>
            </ContainerItens>

        </Container>
    );

}

export default App;