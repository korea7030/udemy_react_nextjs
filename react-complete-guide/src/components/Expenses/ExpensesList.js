import { useState } from 'react';

import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>
            {
                props.items.map((item) => (
                    <ExpenseItem
                      key={item.id}
                      className="expenses"
                      date={item.date}
                      title={item.title}
                      amount={item.amount}
                    />
                ))
            }
        </ul>
    )
}

export default ExpensesList;