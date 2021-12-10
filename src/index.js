import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

let operand1 = null;
let operand2 = null;
let operator = null;
let ans = null;
const operators = ['X','+','-','/'];

function calculate(){
    let content = document.getElementById('display-text');
    if (operator === '+'){
        ans = operand1 + operand2;
        operand1 = operand2 = null;
        content.textContent = ans;
    }
    if (operator === 'X'){
        ans = operand1 * operand2;
        operand1 = operand2 = null;
        content.textContent = ans;
    }
    if (operator === '-'){
        ans = operand1 - operand2;
        operand1 = operand2 = null;
        content.textContent = ans;
    }
    if (operator === '/'){
        ans = operand1 / operand2;
        operand1 = operand2 = null;
        content.textContent = ans;
    }
    
}
function writeToDisplay(value){
    let content = document.getElementById('display-text');
    console.log(value);
    if (Number.isInteger(parseInt(value))){
        content.textContent+=value;
    }
    else if(value === 'AC'){
        content.textContent='';
        operand1 = operand2 = ans = null;
    }
    else if(value === 'C'){
        content.textContent=content.textContent.slice(0,content.textContent.length-1);
    }
    else if(operators.includes(value)){
        console.log("reached here")
        if (operator == null)
             operator = value;
        if (operand1 == null){
            operand1 = parseInt(content.textContent);
            content.textContent = ''
            console.log("operand1",operand1);
        }
    }
    else if(value === '='){
        operand2 = parseInt(content.textContent);
        calculate()
    }
}
function Display(){
    return (<div className="display">
        <p id="display-text"></p>
        </div>);
}
function Keypad(){
    return (<div className="keypad">
        <Key value="AC"/><Key value="+/-"/><Key value="%"/><Key value="/"/>
        <Key value="7"/><Key value="8"/><Key value="9"/><Key value="X"/>
        <Key value="4"/><Key value="5"/><Key value="6"/><Key value="-"/>
        <Key value="1"/><Key value="2"/><Key value="3"/><Key value="+"/>
        <Key value="."/><Key value="0"/><Key value="C"/><Key value="="/>
    </div>);
}
function Key(props){
    return (<div className="key"  onClick={() => writeToDisplay(props.value)}><p className="key-value">{props.value}</p></div>);
}
function Calculator(){
    return (<>
    <Display/>
    <Keypad/>
    </>);
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
  );