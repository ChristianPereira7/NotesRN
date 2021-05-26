import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
background-color: #333;
justify-content: center;
align-items: center;
`;


export const AddButton = styled.TouchableHighlight`
   padding-right: 10px;
`;


export const AddButtonImage = styled.Image`
     width: 24px;
    height: 24px;
`;


export const NotesList = styled.FlatList`
flex: 1;
width: 100%;
`;