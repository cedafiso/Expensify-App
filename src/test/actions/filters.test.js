import expectExport from "expect";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";

test('Should setup set start date with value', () =>{
    const action = setStartDate(1500);
    expectExport(action).toEqual({
        type: 'SET_START_DATE',
        date: 1500
    })
});

test('Should setup set start date with default value', () =>{
    const action = setStartDate();
    expectExport(action).toEqual({
        type: 'SET_START_DATE',
        date: undefined
    })
});

test('Should setup set start date with value', () =>{
    const action = setEndDate(1500);
    expectExport(action).toEqual({
        type: 'SET_END_DATE',
        date: 1500
    })
});

test('Should setup set start date with default value', () =>{
    const action = setEndDate();
    expectExport(action).toEqual({
        type: 'SET_END_DATE',
        date: undefined
    })
});

test('Should setup sortbydate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should setup sortbyamount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});