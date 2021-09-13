import { ref, remove, set, update } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';


export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0, id = uuidv4()} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id,
        description,
        note,
        amount,
        createdAt
    }
});
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', note = '', amount = 0, createdAt = 0
        } = expenseData;
        const expense = {description, note,amount,createdAt}
        firebase.push(ref(database, 'expenses'), expense).then((ref) => {
            console.log(ref.key);
            dispatch(addExpense(
                Object.assign(expense, {id: ref.key})
            ));
        });
    }
};
export const removeExpense = ({ id }={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (expenseData) => {
    return (dispatch) => {
        const {id} = expenseData;
        remove(ref(database, `expenses/${id}`)).
        then(() => {
            console.log('Sucefully remove');
        }).
        catch((e) =>{
            console.log('Unsucefully remove');
        });
        dispatch(removeExpense({id}));
    }
};

export const startEditExpense = (id, expense) => {
    return (dispatch) => {
        const {
            description = '', note = '', amount = 0, createdAt = 0
        } = expense;
        const updates = {description, note, amount, createdAt};
        update(ref(database, 'expenses/'+ id), updates);
        dispatch(editExpense(id, expense));
    };

};

export const editExpense = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
});

export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses  
});

export const startSetExpenses = () => {
    return (dispatch) => {
        const expense = [];
        firebase.get(firebase.child(firebase.ref(database),'expenses')).
        then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                expense.push(Object.assign(childSnapshot.val(), {id:childSnapshot.key}));
            })
            dispatch(setExpenses(expense));
        })
    }
};
