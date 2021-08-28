import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify-App</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dash Board</NavLink>
            <NavLink to="/create" activeClassName="is-active">AddExpensePage</NavLink>
        </header>
    );
}

export default Header;