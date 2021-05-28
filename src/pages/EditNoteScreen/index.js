import React, { useState } from 'react';

import { Container,
         TitleInput,
         BodyInput
        } from './styles';


export default () => {

    const [title, setTitle] = useState('');
    const [body, setBody ] = useState('');

    return(
    <Container>
        <TitleInput
            value={title}
            onChangeText={t=>setTitle(t)} 
            placeholder="Digite o título da anotação..."
            placeholderTextColor="#CCC"
            autoFocus={true}
        />
        <BodyInput
            value={body}
            onChangeText={t=>setBody(t)} 
            placeholder="Digite o corpo da anotação..."
            placeholderTextColor="#CCC"
            multiline={true}
            textAlignVertical="top"
        />
    </Container>
);
}