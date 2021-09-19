import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogOut } from '../actions/auth';
import {connect} from 'react-redux';
const Header = ({startLogOut}) => {
    return (
        <header>
            <h1>Expensify-App</h1>
            <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dash Board</NavLink>
            <NavLink to="/create" activeClassName="is-active">AddExpensePage</NavLink>
            <button onClick={startLogOut}>Log out</button>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined, mapDispatchToProps)(Header);