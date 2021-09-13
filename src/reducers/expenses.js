const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => { return id !== action.id})
        case 'EDIT':
            return state.map((expense) =>{
                if (expense.id === action.id){
                    return (Object.assign({}, expense, action.updates));
                }else{
                    return expense
                }
            })
        case 'SET_EXPENSES':
            return state.concat(action.expenses)
        default:
            return state;
    }
};

export default expensesReducer;