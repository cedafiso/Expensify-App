import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker} from 'react-dates';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';


export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        amount: this.props.expense  ? (this.props.expense.amount/100).toString() : '',
        note: this.props.expense  ? this.props.expense.note : '',
        createdAt: this.props.expense  ? moment(this.props.expense.createdAt) : moment(),
        focused: false,
        error:'',
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }else{
            return null;
        }
        
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(() => ({error: 'Please provide description and amount'}));
        }else{
           this.setState(() => {error:''});
           this.props.onSubmit({
               description: this.state.description,
               amount: parseFloat(this.state.amount, 10)*100 ,
               createdAt: this.state.createdAt.valueOf(),
               note: this.state.note
           });
          }
    };
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                    type='text'
                    placerholder='Description'
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus/>
                    <input 
                    type='text'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}

                    />
                    <SingleDatePicker
                    date ={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    />
                    <textarea 
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

connect()(ExpenseForm);