import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        console.log('In expenses.js');
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (<Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))} */}

        {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> :
            filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))} */}
    </Card>)
}

export default Expenses;