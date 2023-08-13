import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 40px;
    background: #6fbf77;
    font-family: Helvetica, Arial, sans-serif;
    border: 1px solid #D1D1D1;
    margin-top: 8px;
    color: #FFF;
    border-radius: 8px;
    transition: background-color 0.5s ease;
    cursor: pointer;

    &:hover {
        background: #5b9f66;
    }
`