import moment from 'moment';
export const state = [
    {
        id: '1',
        description: 'rent',
        amount: 1000,
        note: 'apt',
        createdAt: moment().valueOf()
    },
    {
        id: '2',
        description: 'Water bill',
        amount: 8000,
        note: 'apt',
        createdAt: moment().add(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Gas bill',
        amount: 500,
        note: 'apt',
        createdAt: moment().subtract(4, 'days').valueOf()
    }
];

export const stateEdit = [{
    id: '2',
    description: 'Agua bill',
    amount: 8000,
    note: 'apt',
    createdAt: state[1].createdAt
}]
