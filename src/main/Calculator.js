import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import Button from '../components/Buttons/Buttons';
import Display from '../components/Display/Display';

let initialState = {
    displayValue: '0',
    clearDisplay: false,
    values: [0, 0],
    current: 0,
    operation: null,
}

export default class Calculator extends React.Component {

    state = { ...initialState };

    addDigit = n => {
        const clearDisplay = this.state.displayValue === '0' ||
            this.state.clearDisplay;
        
        if(n === '.' && clearDisplay || 
            n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const values = this.state.values.slice();
        const current = this.state.current === 0 ? 1 : 1;

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const newValue = currentValue + n;

        values[this.state.current] = newValue;

        this.setState({ displayValue: newValue, values: values, current: current, clearDisplay: false });
    }

    setOperation = op => {
        if(op !== '=') {
            this.setState({ clearDisplay: true, current: 1, operation: op, values: [this.state.displayValue, 0] });
        } else {
            let resultado;
            let newValues = this.state.values.slice();

            switch(this.state.operation) {
                case '/':
                    resultado = parseFloat(this.state.values[0]) / parseFloat(this.state.values[1]);
                    break;
                case '*':
                    resultado = parseFloat(this.state.values[0]) * parseFloat(this.state.values[1]);
                    break;
                case '+':
                    resultado = parseFloat(this.state.values[0]) + parseFloat(this.state.values[1]);
                    break;
                case '-':
                    resultado = parseFloat(this.state.values[0]) - parseFloat(this.state.values[1]);
                    break;
                default:
                    this.setState({ ...initialState });
            }
            newValues = [resultado, 0];

            this.setState({ values: newValues, displayValue: resultado, current: 1, clearDisplay: false });
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState });
    }

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button title='ac' onClick={this.clearMemory} triple />
                    <Button title='/' onClick={this.setOperation} operation />
                    <Button title='7' onClick={this.addDigit} />
                    <Button title='8' onClick={this.addDigit} />
                    <Button title='9' onClick={this.addDigit} /> 
                    <Button title='*' onClick={this.setOperation} operation />
                    <Button title='4' onClick={this.addDigit} />
                    <Button title='5' onClick={this.addDigit} />
                    <Button title='6' onClick={this.addDigit} />
                    <Button title='+' onClick={this.setOperation} operation />
                    <Button title='1' onClick={this.addDigit} />
                    <Button title='2' onClick={this.addDigit} />
                    <Button title='3' onClick={this.addDigit} />
                    <Button title='-' onClick={this.setOperation} operation />
                    <Button title='0' onClick={this.addDigit} double />
                    <Button title='.' onClick={this.addDigit} />
                    <Button title='=' onClick={this.setOperation} operation />
                </View>
            </View>
        );
    }
}