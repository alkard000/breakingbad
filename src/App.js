import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';

import Frase from './components/Frase';

const Contenedor = styled.div`
  display : flex;
  align-items : center;
  padding-top : 5rem;
  flex-direction : column;
  margin-top : 3rem;
`;

const Button = styled.button`
  background-color :  #007d35 ;
  background-size : 300px;
  font-family : Arial, Helvetica, sans-serif;
  color : #fff;
  margin-top : 3rem;
  padding : 1rem 3rem;
  font-size : 2rem;
  border : 2px solid black;
  transition : all .5s ease;

  :hover{
    cursor:pointer;
    background-color: #085e2d;
  }
`;


function App() {

  const [frase, setFrase] = useState({});

  const handleClick = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');

    const frase = await api.json();

    setFrase(frase[0]);
  }

  useEffect( () => {
    handleClick();
  }, [])

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Button
        onClick={() => handleClick()}
      >
        Obtener Frase
      </Button>
    </Contenedor>
  );
}

export default App;
