import React, { useState } from 'react';

import loginImage from '../../assets/login_image.jpg';

import { BeatLoader } from 'react-spinners';

import * as S from './styles'

import { useAuth } from '../../hooks/useAuth';

import Button from '../../components/Button'
import Input from '../../components/Input';

export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useAuth();

    function handleEmailChange(event) {
        setUserEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setUserPassword(event.target.value);
    }

    async function handleLogin() {
        setIsLoading(true);
        try {
            if(!!userEmail && !!userPassword) {
                setShowErrorMessage(false);
                const authorized = await login(userEmail, userPassword);
                if(!authorized) {
                    setErrorMessage('Credenciais incorretas')
                    setShowErrorMessage(true);
                } else {
                    setShowErrorMessage(false);
                }

            } else {
                setErrorMessage('Preencha todos os campos')
                setShowErrorMessage(true);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div>
            <S.Container>
                <S.ContentContainer>
                <S.LeftContainer>
                    <img src={loginImage} alt="login_background"/>
                </S.LeftContainer>
                <S.RightContainer>
                    <S.Title>Faça login</S.Title>
                    <Input label={"Email"} value={userEmail} onChange={handleEmailChange}/>
                    <Input label={"Senha"} value={userPassword} onChange={handlePasswordChange}/>
                    {
                        showErrorMessage && (
                            <S.ErrorText>{errorMessage}</S.ErrorText>
                        )
                    }
                    {
                        isLoading ? (
                            <BeatLoader 
                                style={{alignSelf: "center", marginTop: 6}} 
                                color={'#5b9f66'} 
                                loading={isLoading} 
                                size={14} 
                            />
                        ) : (
                            <Button buttonText={'Entrar'} onClickAction={handleLogin}/>
                        )
                    }
                </S.RightContainer>
                </S.ContentContainer>
            </S.Container>
        </div>
    );
  }
  