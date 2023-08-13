import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Label = styled.label`
    margin-top: 8px;
    font-family: Helvetica, Arial, sans-serif;
`

export const Input = styled.input`
    margin-bottom: 8px;
    border: 1px solid #D1D1D1;
    padding: 8px;
    border-radius: 8px;
    font-family: Helvetica, Arial, sans-serif;

    &:focus {
        outline: 1px solid #d6d6d6;
    }
`