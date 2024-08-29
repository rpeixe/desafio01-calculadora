import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles'
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleDeleteNumber = () => {
    if (currentNumber.length > 1) {
      setCurrentNumber(prev => prev.substring(0, currentNumber.length-1));
    }
    else {
      setCurrentNumber('0');
    }
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSum = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  
  const handleSub = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }
    else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('0');
      setOperation('');
    }
  }
  
  const handleMult = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }
    else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
    }
  }
  
  const handleDiv = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }
    else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSum();
          break;
        case '-':
          handleSub();
          break;
        case '*':
          handleMult();
          break;
        case '/':
          handleDiv();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={() => handleClear()}/>
          <Button label="/" onClick={() => handleDiv()}/>
          <Button label="*" onClick={() => handleMult()}/>
          <Button label="<" onClick={() => handleDeleteNumber()}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleSub()}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleSum()}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
        </Row>
        <Row>
          <Button label="0" flex="3" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={() => handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
