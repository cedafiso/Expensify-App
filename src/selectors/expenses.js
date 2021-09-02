import moment from 'moment';

export default (expense, { endDate , sortBy = '', startDate, text =''} = {}) => {
    return expense.filter((expense) => {
        const creatAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(creatAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(creatAtMoment, 'day') : true;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=> {
        if( sortBy === 'date'){
            return (a.createdAt < b.createdAt ? 1 : -1)
        } else if (sortBy === 'amount'){
            return (a.amount < b.amount ? 1 : -1)
        }
    });
};