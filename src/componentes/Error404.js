import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Error404 = () => {
    return(
        <div>ERROR 404-<Link to="/">Go home</Link></div>
    )
}
export default Error404;