import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {   

// function clickHandler(){}

let title = props.title;

const clickHandler = () => {
   title = 'updated!';
   console.log(title);
};

return (
      <Card className='expense-item'>
          <ExpenseDate date={props.date}/>
          <div className='expense-item__description'>
             <h2>{title}</h2>
             <div className='expense-item__price'>${props.amount}</div>
          </div>
          <button onClick={clickHandler}> Change Title</button>
     </Card>     
);
}

export default ExpenseItem;
