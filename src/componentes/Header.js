import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { startLogOut } from '../actions/auth';
import {connect} from 'react-redux';
const Header = ({startLogOut}) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__tittle" to="/dashboard">
                        <h1>Expensify-App</h1>
                    </Link>
                    <button className="button button--logout"onClick={startLogOut}>Log out</button>
                </div>
            </div>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined, mapDispatchToProps)(Header);