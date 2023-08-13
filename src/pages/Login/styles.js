import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #e0f2f7;
`;

export const ContentContainer = styled.div`
    display: flex;
    background: #FFF;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 50%;
    border: 1px solid #D1D1D1;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const LeftContainer = styled.div`
    display: flex;
    padding: 22px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`;

export const RightContainer = styled.div`
    border-left: 1px solid #D1D1D1;
    display: flex;
    padding: 0px 24px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`

export const Title = styled.div`
    margin-bottom: 20px;
    font-size: 2rem;
    align-self: top;
    font-family: Helvetica, Arial, sans-serif;
`

export const ErrorText = styled.p`
    color: #FF6B6B;
    font-size: 0.8rem;
    font-family: Helvetica, Arial, sans-serif;
`
