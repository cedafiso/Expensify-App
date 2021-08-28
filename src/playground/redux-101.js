

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisible(state.expenses, state.filters);
    console.log(state);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffe', amount: 500, createdAt:-1000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id , {amount :50}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setStartDate(-2000));
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate(125));



// const incrementCount = ({incrementBy = 1} = {}) => {
//   return {
//       type: 'INCREMENT',
//       incrementBy
//   }  
// };

// const store = createStore((state = {count : 0}, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case 'DECREMENT':
//             const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy:1;
//             return{
//                 count: state.count - action.decrementBy
//             }
//         default:
//             return state;
//     }
// });

// const unsubscribe = store.subscribe( () => {
//     console.log(store.getState());
// });

// store.dispatch(incrementCount());


// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

