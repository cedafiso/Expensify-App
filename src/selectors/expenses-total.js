export default (expenses) => {
    return expenses.
    map((expense) => {
        return parseFloat(expense.amount)
    })
    .reduce((sum, value)=> {
        return (sum + value)
    }, 0);

};